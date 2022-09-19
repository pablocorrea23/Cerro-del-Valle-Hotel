import React from 'react'
import { Admin } from '../Admin/Admin';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {

    return (
        <>

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


                {/* <Link to='/admin'><button>Ingresar</button></Link> */}
                {/* <NavLink to='/admin'><button>Ingresar</button></NavLink> */}

                <button>
                    <NavLink to='/admin' element={<Admin />}>Ingresar</NavLink>
                </button>


            </header>

        </>

    )
}
