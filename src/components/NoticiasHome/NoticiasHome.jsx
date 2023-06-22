import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import style from "./NoticiasHome.module.css"
import { Cards } from '../Cards/Cards'


export const NoticiasHome = () => {

    const [data, setData]=useState([])

    useEffect(() => {
        axios.get('http://192.168.68.139:81/api/noticias').then((response) => {

            let aux = response.data

            setData(aux.forEach((e) => {
                
            }))
            setData(response.data) // esto estaba antes response.data.results

        })
            .catch(function (error) {

                console.log(error);
            })
            .then(function () {

            });
    }, []);



    return (
        <div className={style.card_content}>

            {data?.map((el, index) => {
                return (
                    <>
                        <div key={index}>
                            <Cards
                                titulo={el.titulo}
                                copete={el.copete}
                                descripcion={el.descripcion}
                                fecha={el.fecha}
                                imagen={el.imagen}
                            />
                        </div>
                    </>
                )
            })}

        </div>

    )
}