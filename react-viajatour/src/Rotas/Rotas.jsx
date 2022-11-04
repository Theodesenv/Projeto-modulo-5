import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Destino from "../Pages/Destino";
import Promocoes from "../Pages/Promocoes";
import Contato from "../Pages/Contato";
import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";





export default function Rotas() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Destino" element={<Destino />} />
                <Route path="/Promocoes" element={<Promocoes />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
            <Footer/>
        </Router>
        
    )
};