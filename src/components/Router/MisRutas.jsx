import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Admin } from '../Admin/Admin';
import { Personas } from '../Personas/Personas'
import { Noticias } from '../Noticias/Noticias';
import { Login } from '../Login/Login'
import { Papelera } from '../Papelera/Papelera'

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
                <Route path="/login" element={<Login/>}/>
                <Route path="/papelera" element={<Papelera />}/>
                
            </Routes>

            {/* FOOTER*/}

        </BrowserRouter>
    )
}
