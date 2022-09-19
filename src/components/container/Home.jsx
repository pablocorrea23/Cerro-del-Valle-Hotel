import React from 'react'
import { Noticias } from '../Noticias/Noticias'
import style from '../Noticias/Noticias.module.css'
import { Contacto } from './Contacto'
import { Galeria } from './Galeria'
import Navbar  from './Navbar'
import { Servicios } from './Servicios'


export const Home = () => {
    return (

        <>
            <Navbar />

            <div className="title">
                <div className='img_fondo'>
                    {/* <img className='img_fondo1' src={require('../../images/img hero.png')} alt="css"/> */}
                </div>

                <div className='img_titulo'>
                    <img className='img_cerro' src={require('../../images/titulo de img hero.png')} alt="css" width={500} />
                    <h3 className='description_title'>Somos un lugar que encierra todos los <br />
                        secretos de la naturaleza</h3>
                </div>

                <div>
                    <h2 className='description'>Somos un hotel rústico que los espera para una estadia de descanso y confort en sus habitaciones <br />
                        realizadas con materiales autoctonos de la zona. <br />
                        <br />
                        Esta ubicado en la provincia de San Juan, Argentina. Zona de Valle Fertil, a 75KM del Parque <br />
                        Ischigualasto</h2>
                </div>

            </div>
            
            <div >
                <div>
                    <h3 className={style.servicios}>Noticias</h3>
                </div>
                <Noticias/>
            </div>

            <Servicios />
            <Galeria />
            <Contacto />

        </>
    )
}
