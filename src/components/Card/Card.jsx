import React from 'react'
import style from './Card.module.css';

export const Card = (img, title) => {
  return (
    <div>
        <div className={style.img}>
            {img}
        </div>

        <div>
            {title}
        </div>
    </div>
  )
}
