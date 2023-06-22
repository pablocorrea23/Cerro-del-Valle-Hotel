import React from "react";
import style from "./CardServicio.module.css";

export const CardServicio = (props) => {
  return (
    <div className='Cards'>
      <div className={style.img}>
        <img
          src={props.img}
          alt="baño"
        />
        <h3 className={style.h3Card}>{props.title}</h3>
      </div>
    </div>
  );
};