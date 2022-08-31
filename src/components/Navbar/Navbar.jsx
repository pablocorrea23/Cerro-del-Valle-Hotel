import React from 'react'
import { NavLink } from 'react-router-dom';


import styles from './Navbar.module.css';

export const Navbar = () => {

    return (
        <header className={styles.header}>
            <img className={styles.img_navbar} src={require('../../images/logo.png')} alt="css" width={55} />
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {/* <li className={styles.li}>Home</li> */}

                    <li className={styles.li}>
                        <a href='/noticias'>
                            Noticias
                        </a>
                    </li>

                    <li className={styles.li}>
                        servicios
                    </li>

                    <li className={styles.li}>
                        Galeria de fotos
                    </li>

                    <li className={styles.li}>
                        Contacto
                    </li>
                </ul>
            </nav>

        </header>

    )
}
