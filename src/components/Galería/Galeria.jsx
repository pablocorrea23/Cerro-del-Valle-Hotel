import React from 'react'
import style from './Galeria.module.css'


export const Galeria = () => {
  return (
    <div className={style.galeria}>
      <h3 className={style.titleGaleria}>Galería de Fotos</h3>

      <div className={style.containerImg}>
        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel1.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel2.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel3.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel4.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel5.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel6.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel7.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>

        <div className={style.boxImg}>
          <a href="#c">
            <figure>
              <img
                src={require("../../images/images-galeria/imghotel8.jpg")}
                alt="css"
              />
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};
