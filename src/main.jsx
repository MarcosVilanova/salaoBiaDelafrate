import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav/nav.jsx';
/* IMPORT PAGES */
import Home from './pages/Home/index.jsx';
import Contato from './pages/Contato/contato.jsx';
import Produtos from './pages/Produtos/produtos.jsx';
import './index.css';
/* IMPORT SWIPER */
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <NavComponent />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Routes>
            </div>
        </BrowserRouter>
    </StrictMode>
);
