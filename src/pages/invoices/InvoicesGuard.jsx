import { Navigate, useLocation } from "react-router-dom";
import { isInvoiceAuthenticated } from "./InvoiceLogin";
import Invoices from "./Invoices";

export default function InvoicesGuard() {
  const location = useLocation();
  if (!isInvoiceAuthenticated()) {
    return <Navigate to="/invoices/login" state={{ from: location }} replace />;
  }
  return <Invoices />;
}
