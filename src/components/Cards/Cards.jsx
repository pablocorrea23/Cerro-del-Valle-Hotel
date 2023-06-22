import React, {useState} from 'react'
import style from "./Cards.module.css"
import Modal from '../Modal/Modal'

export const Cards = ({titulo, copete, descripcion, fecha, imagen})  => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    // const Togglecerrar = () => setModal(!modal);
    return (
        <div className={style.card}>
            <div className={style.cardLogo}>
                <img src={imagen} alt="Imagen"/>
            </div>
            <div className={style.card_content}>
                <h2>{titulo}</h2>
                <p>{copete}</p>
                <p>{descripcion}</p>
                <h6>{fecha}</h6>
                <div className={style.ver_mas}>
                <button className={style.clickme} onClick={() => Toggle()}>Ver Mas</button>
                <Modal data={(titulo, copete, descripcion, fecha, imagen)} show={modal} close={Toggle}/>
                </div>
            </div>
        </div>
    )
}