import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Invoices.module.scss";
import { clearInvoiceAuth } from "./InvoiceLogin";
import {
  getInvoices,
  saveInvoices,
  getNextInvoiceNumber,
  generateId,
} from "../../utils/invoiceStorage";
import { exportToExcel, importFromExcel } from "../../utils/invoiceExcel";
import { generateInvoicePdf } from "../../utils/invoicePdf";

const TVA_RATE = 20;

const defaultItem = () => ({
  id: generateId(),
  description: "",
  quantity: 1,
  unitPrice: 0,
  amount: 0,
});

const defaultInvoice = () => ({
  id: generateId(),
  number: getNextInvoiceNumber(),
  clientName: "",
  clientEmail: "",
  clientAddress: "",
  date: new Date().toISOString().slice(0, 10),
  dueDate: "",
  status: "draft",
  items: [defaultItem()],
  taxRate: TVA_RATE,
  notes: "",
});

const computeTotals = (items) => {
  const subtotal = items.reduce((s, i) => s + ((i.quantity || 0) * (i.unitPrice || 0)), 0);
  const tax = (subtotal * TVA_RATE) / 100;
  return { subtotal, tax, total: subtotal + tax };
};

const buildGmailUrl = (invoices, toEmail = "") => {
  const subject = encodeURIComponent(`Factures ${invoices.map((i) => i.number).join(", ")}`);
  const lines = invoices.map(
    (inv) =>
      `- ${inv.number} | ${inv.clientName || "—"} | ${(inv.total || 0).toFixed(2)} MAD`
  );
  const body = encodeURIComponent(
    `Bonjour,\n\nVeuillez trouver ci-joint les factures suivantes :\n\n${lines.join("\n")}\n\nCordialement`
  );
  const to = toEmail ? `&to=${encodeURIComponent(toEmail)}` : "";
  return `https://mail.google.com/mail/?view=cm&su=${subject}&body=${body}${to}`;
};

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [modal, setModal] = useState(null);
  const [editing, setEditing] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const load = useCallback(() => setInvoices(getInvoices()), []);
  useEffect(() => {
    load();
  }, [load]);

  const persist = (next) => {
    setInvoices((prev) => {
      const list = typeof next === "function" ? next(prev) : next;
      saveInvoices(list);
      return list;
    });
  };

  const openCreate = () => {
    setEditing(defaultInvoice());
    setModal("form");
  };

  const openEdit = (inv) => {
    const items = inv.items?.length
      ? inv.items.map((i) => ({ ...i, id: i.id || generateId() }))
      : [defaultItem()];
    items.forEach((i) => {
      i.amount = (i.quantity || 0) * (i.unitPrice || 0);
    });
    setEditing({ ...inv, items, taxRate: TVA_RATE });
    setModal("form");
  };

  const updateItem = (idx, field, value) => {
    setEditing((p) => {
      const items = [...(p.items || [])];
      items[idx] = { ...items[idx], [field]: value };
      if (field === "quantity" || field === "unitPrice") {
        items[idx].amount = (items[idx].quantity || 0) * (items[idx].unitPrice || 0);
      }
      return { ...p, items };
    });
  };

  const removeItem = (idx) => {
    setEditing((p) => {
      const items = p.items?.filter((_, i) => i !== idx) || [];
      return { ...p, items: items.length ? items : [defaultItem()] };
    });
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === invoices.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(invoices.map((i) => i.id)));
  };

  const selectedInvoices = invoices.filter((i) => selectedIds.has(i.id));

  const handleDownloadPdf = () => {
    selectedInvoices.forEach(generateInvoicePdf);
  };

  const handleSendGmail = () => {
    if (!selectedInvoices.length) return;
    selectedInvoices.forEach(generateInvoicePdf);
    const email = selectedInvoices[0]?.clientEmail || "";
    window.open(buildGmailUrl(selectedInvoices, email), "_blank", "noopener");
  };

  const closeModal = () => {
    setModal(null);
    setEditing(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const validItems = (editing.items || []).filter((i) => (i.description || "").trim());
    const finalItems = validItems.length ? validItems : [defaultItem()];
    const { subtotal, tax, total } = computeTotals(finalItems);

    const payload = {
      ...editing,
      clientName: form.clientName?.value || "",
      clientEmail: form.clientEmail?.value || "",
      clientAddress: form.clientAddress?.value || "",
      date: form.date?.value || editing.date,
      dueDate: form.dueDate?.value || "",
      status: form.status?.value || "draft",
      taxRate: TVA_RATE,
      notes: form.notes?.value || "",
      items: finalItems.map((i) => ({
        ...i,
        amount: (i.quantity || 0) * (i.unitPrice || 0),
      })),
      subtotal,
      tax,
      total,
    };

    const existing = invoices.findIndex((i) => i.id === payload.id);
    let next;
    if (existing >= 0) {
      next = invoices.map((i, idx) => (idx === existing ? payload : i));
    } else {
      next = [...invoices, payload];
    }
    persist(next);
    closeModal();
  };

  const handleDelete = (id) => {
    persist(invoices.filter((i) => i.id !== id));
    setDeleteConfirm(null);
  };

  const handleImport = async (file) => {
    try {
      const imported = await importFromExcel(file);
      if (!imported?.length) return;
      const withIds = imported.map((i) => {
        const items = (i.items?.length ? i.items : [defaultItem()]).map((it) => ({
          ...it,
          id: it.id || generateId(),
          amount: (it.quantity || 0) * (it.unitPrice || 0),
        }));
        const { subtotal, tax, total } = computeTotals(items);
        return {
          ...i,
          id: i.id || generateId(),
          items,
          taxRate: TVA_RATE,
          subtotal,
          tax,
          total,
        };
      });
      persist([...invoices, ...withIds]);
      closeModal();
    } catch {
      // Silently fail or could add toast
    }
  };

  const statusLabels = { draft: "Brouillon", sent: "Envoyée", paid: "Payée" };
  const navigate = useNavigate();

  const handleLogout = () => {
    clearInvoiceAuth();
    navigate("/invoices/login", { replace: true });
  };

  return (
    <div className={styles.invoices}>
      <div className={styles.invoices_container}>
        <motion.header
          className={styles.invoices_header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1>Factures<span>.</span></h1>
            <p>Créez et gérez vos factures. Les données sont stockées localement et peuvent être exportées en Excel.</p>
          </div>
          <button
            className={styles.btn_logout}
            onClick={handleLogout}
            title="Se déconnecter"
          >
            <i className="fi fi-rs-sign-out-alt" /> Déconnexion
          </button>
        </motion.header>

        <motion.div
          className={styles.invoices_actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button className={styles.btn_primary} onClick={openCreate}>
            <i className="fi fi-rs-add" /> Nouvelle facture
          </button>
          {selectedInvoices.length > 0 && (
            <div className={styles.selection_actions}>
              <button
                className={styles.btn_secondary}
                onClick={handleDownloadPdf}
              >
                <i className="fi fi-rs-document" /> Télécharger PDF
              </button>
              <button
                className={styles.btn_secondary}
                onClick={handleSendGmail}
              >
                <i className="fi fi-rs-send" /> Envoyer via Gmail
              </button>
            </div>
          )}
          <div className={styles.export_actions}>
            <button
              className={styles.btn_secondary}
              onClick={() => exportToExcel(invoices)}
              disabled={!invoices.length}
            >
              <i className="fi fi-rs-document" /> Exporter Excel
            </button>
            <label className={styles.btn_secondary}>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleImport(f);
                  e.target.value = "";
                }}
                style={{ display: "none" }}
              />
              <i className="fi fi-rs-upload" /> Importer Excel
            </label>
          </div>
        </motion.div>

        <motion.div
          className={styles.invoices_table_wrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {invoices.length === 0 ? (
            <div className={styles.empty}>
              <i className="fi fi-rs-document" />
              <p>Aucune facture. Cliquez sur « Nouvelle facture » pour commencer.</p>
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th_checkbox}>
                    <input
                      type="checkbox"
                      checked={invoices.length > 0 && selectedIds.size === invoices.length}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th>N°</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Statut</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id}>
                    <td className={styles.td_checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(inv.id)}
                        onChange={() => toggleSelect(inv.id)}
                      />
                    </td>
                    <td>{inv.number}</td>
                    <td>{inv.clientName || "—"}</td>
                    <td>{inv.date}</td>
                    <td>{inv.total?.toFixed(2) ?? "0.00"} MAD</td>
                    <td>
                      <span className={styles[`status_${inv.status}`]}>
                        {statusLabels[inv.status] || inv.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className={styles.btn_icon}
                        onClick={() => generateInvoicePdf(inv)}
                        title="Télécharger PDF"
                      >
                        <i className="fi fi-rs-document" />
                      </button>
                      <button
                        className={styles.btn_icon}
                        onClick={() => openEdit(inv)}
                        title="Modifier"
                      >
                        <i className="fi fi-rs-edit" />
                      </button>
                      <button
                        className={styles.btn_icon}
                        onClick={() => setDeleteConfirm(inv.id)}
                        title="Supprimer"
                      >
                        <i className="fi fi-rs-trash" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {modal === "form" && editing && (
          <motion.div
            className={styles.modal_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modal_header}>
                <h2>{invoices.some((i) => i.id === editing.id) ? "Modifier" : "Nouvelle"} facture</h2>
                <button className={styles.btn_close} onClick={closeModal}>
                  <i className="fi fi-rs-cross-small" />
                </button>
              </div>
              <form onSubmit={handleSave} className={styles.form}>
                <div className={styles.form_grid}>
                  <div>
                    <label>N° facture</label>
                    <input type="text" value={editing.number} readOnly disabled />
                  </div>
                  <div>
                    <label>Date</label>
                    <input type="date" name="date" defaultValue={editing.date} required />
                  </div>
                  <div>
                    <label>Échéance</label>
                    <input type="date" name="dueDate" defaultValue={editing.dueDate} />
                  </div>
                  <div>
                    <label>Statut</label>
                    <select name="status" defaultValue={editing.status}>
                      <option value="draft">Brouillon</option>
                      <option value="sent">Envoyée</option>
                      <option value="paid">Payée</option>
                    </select>
                  </div>
                </div>
                <div className={styles.form_section}>
                  <h3>Client</h3>
                  <div className={styles.form_grid}>
                    <div>
                      <label>Nom / Société</label>
                      <input name="clientName" defaultValue={editing.clientName} required />
                    </div>
                    <div>
                      <label>E-mail</label>
                      <input type="email" name="clientEmail" defaultValue={editing.clientEmail} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label>Adresse</label>
                      <textarea name="clientAddress" rows={2} defaultValue={editing.clientAddress} />
                    </div>
                  </div>
                </div>
                <div className={styles.form_section}>
                  <h3>Lignes</h3>
                  <div className={styles.items_header}>
                    <span>Description</span>
                    <span>Qté</span>
                    <span>Prix unit.</span>
                    <span>Montant</span>
                    <span></span>
                  </div>
                  {editing.items?.map((item, idx) => (
                    <div key={item.id || idx} className={styles.item_row} data-invoice-item>
                      <input
                        value={item.description}
                        onChange={(e) => updateItem(idx, "description", e.target.value)}
                        placeholder="Description"
                      />
                      <input
                        type="number"
                        min={0}
                        step={1}
                        value={item.quantity}
                        onChange={(e) => updateItem(idx, "quantity", parseFloat(e.target.value) || 0)}
                      />
                      <input
                        type="number"
                        min={0}
                        step={0.01}
                        value={item.unitPrice}
                        onChange={(e) => updateItem(idx, "unitPrice", parseFloat(e.target.value) || 0)}
                      />
                      <span className={styles.item_amount}>
                        {((item.quantity || 0) * (item.unitPrice || 0)).toFixed(2)} MAD
                      </span>
                      <button
                        type="button"
                        className={styles.btn_remove_item}
                        onClick={() => removeItem(idx)}
                        disabled={(editing.items?.length || 0) <= 1}
                        title="Supprimer la ligne"
                      >
                        <i className="fi fi-rs-trash" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className={styles.btn_add_item}
                    onClick={() =>
                      setEditing((p) => ({
                        ...p,
                        items: [...(p.items || []), defaultItem()],
                      }))
                    }
                  >
                    <i className="fi fi-rs-add" /> Ajouter une ligne
                  </button>
                </div>
                <div className={styles.form_totals}>
                  {(() => {
                    const { subtotal, tax, total } = computeTotals(editing.items || []);
                    return (
                      <>
                        <div>
                          <span>Sous-total HT</span>
                          <span>{subtotal.toFixed(2)} MAD</span>
                        </div>
                        <div>
                          <span>TVA (20%)</span>
                          <span>{tax.toFixed(2)} MAD</span>
                        </div>
                        <div className={styles.total_row}>
                          <span>Total TTC</span>
                          <span>{total.toFixed(2)} MAD</span>
                        </div>
                      </>
                    );
                  })()}
                </div>
                <div className={styles.form_grid}>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label>Notes</label>
                    <textarea name="notes" rows={2} defaultValue={editing.notes} />
                  </div>
                </div>
                <div className={styles.form_actions}>
                  <button type="button" className={styles.btn_secondary} onClick={closeModal}>
                    Annuler
                  </button>
                  <button type="submit" className={styles.btn_primary}>
                    Enregistrer
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {deleteConfirm && (
          <motion.div
            className={styles.modal_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              className={styles.modal_confirm}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Supprimer cette facture ?</h3>
              <p>Cette action est irréversible.</p>
              <div className={styles.form_actions}>
                <button
                  className={styles.btn_secondary}
                  onClick={() => setDeleteConfirm(null)}
                >
                  Annuler
                </button>
                <button
                  className={styles.btn_danger}
                  onClick={() => handleDelete(deleteConfirm)}
                >
                  Supprimer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
