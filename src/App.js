import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./pages/services/Services";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Contact from "./pages/contact/Contact";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./pages/about/About";
import Jat from "./pages/jat/Jat";
import Company from "./pages/company/Company";
import GetAQuote from "./pages/get-a-quote/GetAQuote";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  colors: {
    primary: "#25d366",
    secondary: "#25d366",
    background: "#fff",
    text: "#222",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Jat />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
