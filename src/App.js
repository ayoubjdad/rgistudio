import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./pages/services/Services";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Contact from "./pages/contact/Contact";
import Company from "./pages/company/Company";
import GetAQuote from "./pages/get-a-quote/GetAQuote";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
