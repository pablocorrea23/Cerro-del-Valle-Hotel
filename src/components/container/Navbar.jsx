import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    return (        
        <header className="header">
            <img className='img_navbar' src={require('../../images/logo.png')} alt="css" width={55} />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Galeria de fotos</li>
                    <li>Contacto</li>
                    <div className='buttonIngresar'>
                        <button onClick={() => navigate("/login")}className='ingresar'>
                            Ingresar
                        </button>
                    </div>
                </ul>
            </nav>
            
        </header>        
            
    )
}
