import React from 'react';
import styles from './Home.module.css'
import { Servicios } from '../Servicios/Servicios'
import { Contacto } from '../Contacto/Contacto';
import { Galeria } from '../Galeria/Galeria';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

import { NoticiasHome } from '../NoticiasHome/NoticiasHome';

export const Home = () => {
    return (
        <>

            <Navbar />

            <div className={styles.title} id='Home'>


                <div className={styles.imgTitulo}>
                    <img className={styles.imgCerro} src={require('../../images/titulo de img hero.png')} alt="css" width={500} />
                    <h3 className={styles.descriptionTitle}>Somos un lugar que encierra todos los <br />
                        secretos de la naturaleza</h3>
                </div>

                <div>
                    <p className={styles.description}>Somos un hotel rústico que los espera para una estadía de descanso y confort en sus habitaciones <br />
                        realizadas con materiales autóctonos de la zona. <br />
                        <br />
                        Está ubicado en la provincia de San Juan, Argentina. Zona de Valle Fértil, a 75KM del Parque <br />
                        Ischigualasto
                    </p>
                </div>

            </div>


            <div>
                <div className={styles.servicios}>
                    <h3>Noticias</h3>
                </div>
                <NoticiasHome />
            </div>

            <Servicios />
            <Galeria />
            <Contacto />
            <Footer />

        </>
    )
}
