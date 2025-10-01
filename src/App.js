import { ThemeProvider } from "@emotion/react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./pages/services/Services";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

const theme = {
  colors: {
    primary: "#25d268",
    secondary: "#25d366",
    background: "#fff",
    text: "#222",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
