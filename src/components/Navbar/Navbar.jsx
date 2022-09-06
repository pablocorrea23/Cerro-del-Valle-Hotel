import React from 'react'

export const Navbar = () => {
    return (        
        <header className="header">
            <img className='img_navbar' src={require('../../images/logo.png')} alt="css" width={55} />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Noticias</li>
                    <li>Servicios</li>
                    <li>Galeria de fotos</li>
                    <li>Contacto</li>
                    <li className="ingreso">Ingresar</li>
                </ul>
            </nav>
        
            
        </header>        
            
    )
}
