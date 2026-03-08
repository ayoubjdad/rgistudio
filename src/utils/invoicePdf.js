import jsPDF from "jspdf";

const TVA_RATE = 20;

export const generateInvoicePdf = (invoice) => {
  const doc = new jsPDF();
  const pageW = doc.internal.pageSize.getWidth();
  let y = 20;

  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("FACTURE", 20, y);
  y += 12;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`N° ${invoice.number}`, 20, y);
  doc.text(`Date: ${invoice.date}`, pageW - 60, y);
  y += 8;

  if (invoice.dueDate) {
    doc.text(`Échéance: ${invoice.dueDate}`, pageW - 60, y);
    y += 8;
  }

  y += 8;
  doc.setFont("helvetica", "bold");
  doc.text("Client", 20, y);
  doc.setFont("helvetica", "normal");
  y += 6;
  doc.text(invoice.clientName || "—", 20, y);
  y += 5;
  if (invoice.clientEmail) {
    doc.text(invoice.clientEmail, 20, y);
    y += 5;
  }
  if (invoice.clientAddress) {
    const addr = doc.splitTextToSize(invoice.clientAddress, pageW - 40);
    doc.text(addr, 20, y);
    y += addr.length * 5 + 5;
  } else {
    y += 5;
  }

  y += 10;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, y, pageW - 20, y);
  y += 10;

  doc.setFont("helvetica", "bold");
  doc.text("Description", 20, y);
  doc.text("Qté", 120, y);
  doc.text("Prix unit.", 140, y);
  doc.text("Montant", pageW - 50, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  const items = invoice.items || [];
  let subtotal = 0;
  for (const item of items) {
    const qty = parseFloat(item.quantity) || 0;
    const up = parseFloat(item.unitPrice) || 0;
    const amt = qty * up;
    subtotal += amt;
    const desc = (item.description || "").slice(0, 40);
    doc.text(desc, 20, y);
    doc.text(String(qty), 120, y);
    doc.text(`${(up || 0).toFixed(2)} MAD`, 140, y);
    doc.text(`${amt.toFixed(2)} MAD`, pageW - 50, y);
    y += 6;
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
  }

  y += 10;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, y, pageW - 20, y);
  y += 8;

  doc.text("Sous-total HT:", pageW - 80, y);
  doc.text(`${(subtotal || 0).toFixed(2)} MAD`, pageW - 50, y);
  y += 6;

  const tax = (subtotal * TVA_RATE) / 100;
  doc.text(`TVA (${TVA_RATE}%):`, pageW - 80, y);
  doc.text(`${tax.toFixed(2)} MAD`, pageW - 50, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.text("Total TTC:", pageW - 80, y);
  doc.text(`${((subtotal || 0) + tax).toFixed(2)} MAD`, pageW - 50, y);
  y += 15;

  if (invoice.notes) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const notes = doc.splitTextToSize(invoice.notes, pageW - 40);
    doc.text("Notes:", 20, y);
    y += 5;
    doc.text(notes, 20, y);
  }

  doc.save(`facture-${invoice.number}.pdf`);
};
