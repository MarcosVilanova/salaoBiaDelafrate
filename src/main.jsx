import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* COMPONENTES */
import NavComponent from "./components/nav/nav.jsx";
import Footer from "./components/footer/footer.jsx";

/* PÁGINAS */
import Home from "./pages/Home/index.jsx";
import Contato from "./pages/Contato/contato.jsx";
import Produtos from "./pages/Produtos/produtos.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavComponent /> {/* Navbar sempre visível */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
