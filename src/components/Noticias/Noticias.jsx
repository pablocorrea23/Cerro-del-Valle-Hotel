import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Cards/Card'
import style from "./Noticias.module.css"


export const Noticias = () => {

    const [data, setData]=useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((response) => {

            let aux = response.data.results

            setData(aux.forEach((e) => {
                console.log(e);
            }))
            setData(response.data.results)

        })
            .catch(function (error) {

                console.log(error);
            })
            .then(function () {

            });
    }, []);



    return (
        <div className={style.card_content}>

            {data?.map((el) => {
                return (
                    <>
                        <div key={el.id}>
                            <Card

                                name={el.name}
                                image={el.image}
                            />
                        </div>
                    </>
                )
            })}

        </div>

    )
}
