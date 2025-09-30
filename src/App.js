import { ThemeProvider } from "@emotion/react";
import Home from "./pages/home/Home";

const theme = {
  colors: {
    primary: "#075e54",
    secondary: "#25d366",
    background: "#fff",
    text: "#222",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
