import React, {useState} from 'react'
import style from './Navbar.module.css'
// import { Link } from 'react-scroll'

export const Navbar = () => {

  const  [click, setClick] = useState(false)

  // const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (        
    <header className={style.header}>
      <img className={style.img_navbar} src={require('../../images/logo.png')} alt="css" width={55} />
      <nav>
        

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={style.navItem}>
                <a href='#Home' onClick={closeMenu}>Home</a>
              </li>
              <li className={style.navItem}>
                <a href='#Noticias' onClick={closeMenu}>Noticias</a>
              </li>
              <li className={style.navItem}>
                <a href='#Servicios' onClick={closeMenu}>Servicios</a>
              </li>
              <li className={style.navItem}>
                <a href='#Galeria de Fotos' onClick={closeMenu}>Galeria de Fotos</a>
              </li>
              <li className={style.navItem}>
                <a href='#Contacto' onClick={closeMenu}>Contacto</a>
              </li>
              <li className={style.ingreso}>Ingresar</li>
          </ul>

      </nav>
        
            
    </header>        
            
    )
}
