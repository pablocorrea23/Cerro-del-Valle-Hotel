import React from 'react';
import styles from './sidebar.module.css';
import { Link, useNavigate } from 'react-router-dom'

import swal from 'sweetalert';

//import { Personas} from '../Personas/Personas'

export const Sidebar = () => {

    const navigate = useNavigate();// como no me funcionaba Link ni NavLink use el hook useNavigate que es para el mismo uso.

    const pulsar = () => {
        swal({
            title: "Desea Cerrar Sesión?",
            text: "Será redirigido a Inicio",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    //<Link to='/' element={<Home />}/> esto no funcionaba ni NavLink :( por eso uso el hook useNavigate.
                    navigate('/');

                } else {
                    swal("Permanecerá en la sesion iniciada :)");
                }
            });
    }


    return (
        <div>
            <div className={styles.box}>
                <header className={styles.sidebar}>
                    <nav>
                        <ul className={styles.sidebarList}>

                            <div>
                                <li className={styles.row}>
                                    <box-icon type='solid' name='news'></box-icon>
                                    <Link to='/noticias'>Editar Noticias</Link>
                                </li>
                            </div>

                            <div>
                                <li className={styles.row} >
                                    <box-icon name='user'></box-icon>
                                    <Link to='/personas'>Personas Contactadas</Link>
                                </li>
                            </div>

                        </ul>
                    </nav>
                    <div className={styles.sesion}>

                        <button onClick={() => { pulsar() }}>
                            Cerrar Sesion
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}
