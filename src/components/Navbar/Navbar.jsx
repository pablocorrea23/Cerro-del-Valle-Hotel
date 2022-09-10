import React from 'react'
import style from './Navbar.module.css'

export const Navbar = () => {
    return (        
        <header className={style.header}>
            <img className={style.img_navbar} src={require('../../images/logo.png')} alt="css" width={55} />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Noticias</li>
                    <li>Servicios</li>
                    <li>Galeria de fotos</li>
                    <li>Contacto</li>
                    <li className={style.ingreso}>Ingresar</li>
                </ul>
            </nav>
        
            
        </header>        
            
    )
}
