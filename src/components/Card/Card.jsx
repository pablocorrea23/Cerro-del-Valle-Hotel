import React from "react";
import style from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className='Cards'>
      <div className={style.img}>
        <img
          src={props.img}
          alt="baño"
        />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};
