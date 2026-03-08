import * as XLSX from "xlsx";

export const exportToExcel = (invoices) => {
  const rows = invoices.flatMap((inv) => {
    const base = {
      "N° Facture": inv.number,
      Client: inv.clientName,
      Email: inv.clientEmail,
      Date: inv.date,
      "Échéance": inv.dueDate,
      Statut: inv.status,
      Total: inv.total,
    };
    if (!inv.items?.length) return [base];
    return inv.items.map((item, i) =>
      i === 0
        ? { ...base, Description: item.description, Qté: item.quantity, "Prix unit.": item.unitPrice, Montant: item.amount }
        : { Description: item.description, Qté: item.quantity, "Prix unit.": item.unitPrice, Montant: item.amount }
    );
  });
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Factures");
  XLSX.writeFile(wb, `factures-${new Date().toISOString().slice(0, 10)}.xlsx`);
};

export const importFromExcel = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const wb = XLSX.read(data, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws);
        const invoices = [];
        let current = null;
        for (const row of rows) {
          const num = row["N° Facture"] ?? row["N°"] ?? row.number;
          if (num) {
            current = {
              id: `import-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
              number: String(num),
              clientName: row.Client ?? row.clientName ?? "",
              clientEmail: row.Email ?? row.clientEmail ?? "",
              date: row.Date ?? row.date ?? new Date().toISOString().slice(0, 10),
              dueDate: row["Échéance"] ?? row.dueDate ?? "",
              status: row.Statut ?? row.status ?? "draft",
              total: parseFloat(row.Total ?? row.total ?? 0) || 0,
              items: [],
            };
            if (row.Description ?? row.description) {
              current.items.push({
                description: row.Description ?? row.description,
                quantity: parseFloat(row["Qté"] ?? row.quantity ?? 1) || 1,
                unitPrice: parseFloat(row["Prix unit."] ?? row.unitPrice ?? 0) || 0,
                amount: parseFloat(row.Montant ?? row.amount ?? 0) || 0,
              });
            }
            invoices.push(current);
          } else if (current && (row.Description ?? row.description)) {
            current.items.push({
              description: row.Description ?? row.description,
              quantity: parseFloat(row["Qté"] ?? row.quantity ?? 1) || 1,
              unitPrice: parseFloat(row["Prix unit."] ?? row.unitPrice ?? 0) || 0,
              amount: parseFloat(row.Montant ?? row.amount ?? 0) || 0,
            });
          }
        }
        resolve(invoices);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Erreur de lecture du fichier"));
    reader.readAsArrayBuffer(file);
  });
};
