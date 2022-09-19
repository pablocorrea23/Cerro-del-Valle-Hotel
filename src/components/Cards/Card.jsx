import React, {useState} from 'react'
import style from "./Card.module.css"
import Modal from '../Modal/Modal'

export default function Card({title, image, description, author}) {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    const Togglecerrar = () => setModal(!modal);
    return (
        <div className={style.card}>
            <div className={style.cardLogo}>
                <img src={image} alt="Imagen"/>
            </div>
            <div className={style.card_content}>
                <h2>Titulo{title}</h2>
                <p>Estos es una descripcion{description}</p>
                <h6>Publicado por cerro del valle{author}</h6>
                <div className={style.ver_mas}>
                <button className={style.clickme} onClick={() => Toggle()}>Ver Mas</button>
                <Modal show={modal} close={Toggle}/>
                </div>
            </div>
        </div>
    )
}
