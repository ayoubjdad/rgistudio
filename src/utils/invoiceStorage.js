const STORAGE_KEY = "rgi_invoices";
const COUNTER_KEY = "rgi_invoice_counter";

export const getInvoices = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveInvoices = (invoices) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
};

export const getNextInvoiceNumber = () => {
  const n = parseInt(localStorage.getItem(COUNTER_KEY) || "0", 10) + 1;
  localStorage.setItem(COUNTER_KEY, String(n));
  return `INV-${String(n).padStart(4, "0")}`;
};

export const generateId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
