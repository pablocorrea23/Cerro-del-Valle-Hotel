import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Admin } from '../Admin/Admin';
import { Personas } from '../Personas/Personas'
import { Noticias } from '../Noticias/Noticias';

export const MisRutas = () => {
    return (
        <BrowserRouter>

            {/*HEADER Y NAVEGACIÓN*/}            

            {/*CONTENIDO CENTRAL*/}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin/*' element={<Admin />} />
                <Route path='/personas' element={<Personas />} />
                <Route path='/noticias' element={<Noticias />} />
            </Routes>

            {/* FOOTER*/}

        </BrowserRouter>
    )
}
