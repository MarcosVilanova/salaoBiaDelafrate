import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* COMPONENTES */
import NavComponent from "./components/nav/nav.jsx";
import Footer from "./components/footer/footer.jsx";
import ScrollToTop from "./components/ScrollTop/ScrollTop.js";
/* PÁGINAS */
import Home from "./pages/Home/index.jsx";
import Contato from "./pages/Contato/contato.jsx";
import Produtos from "./pages/Produtos/produtos.jsx";
import "./index.css";
import Creditos from "./pages/Creditos/creditos.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
        <NavComponent/>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/creditos" element={<Creditos/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    </StrictMode>,
);
