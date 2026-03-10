import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import Services from "./pages/services/Services";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Contact from "./pages/contact/Contact";
import Company from "./pages/company/Company";
import GetAQuote from "./pages/get-a-quote/GetAQuote";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import CVGenerator from "./pages/cv-generator/CVGenerator";
import InvoicesGuard from "./pages/invoices/InvoicesGuard";
import InvoiceLogin from "./pages/invoices/InvoiceLogin";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const isInvoicesArea = location.pathname.startsWith("/invoices");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isInvoicesArea && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
        <Route path="/cv-generator" element={<CVGenerator />} />
        <Route path="/invoices" element={<InvoicesGuard />} />
        <Route path="/invoices/login" element={<InvoiceLogin />} />
      </Routes>
      {!isInvoicesArea && <Footer />}
      {!isInvoicesArea && <ScrollToTop />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
