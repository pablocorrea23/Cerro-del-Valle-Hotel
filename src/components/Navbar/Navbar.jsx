import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Login } from '../Login/Login'
// import { Link } from 'react-scroll'

export const Navbar = () => {

    const [click, setClick] = useState(false)

    // const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <header className='header'>
            <img className='img_navbar' src={require('../../images/logo.png')} alt="css" width={55} />

            <nav>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='navItem'>
                        <a href='#Home' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href='#Noticias' onClick={closeMenu}>Noticias</a>
                    </li>
                    <li className='navItem'>
                        <a href='#Servicios' onClick={closeMenu}>Servicios</a>
                    </li>
                    <li className='navItem'>
                        <a href='#Galeria de Fotos' onClick={closeMenu}>Galeria de Fotos</a>
                    </li>
                    <li className='navItem'>
                        <a href='#Contacto' onClick={closeMenu}>Contacto</a>
                    </li>

                    <div className='buttonIngresar'>
                        <button className='ingresar'>
                            <NavLink to='/login' element={<Login />}>Ingresar</NavLink>
                        </button>
                    </div>
                </ul>
            </nav>

            <div className="burger">
                <box-icon name='menu' color={'#fff'} size={'md'}></box-icon>
            </div>
        </header>

    )
}



