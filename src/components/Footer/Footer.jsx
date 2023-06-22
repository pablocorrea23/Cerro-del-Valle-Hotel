import React from "react";
import style from '../Footer/Footer.module.css';



export const Footer = () => {
  ///
  return (
    <footer className={style.footer}>
      <div className={style.imagenDatos}>
        <div className={style.contenedorImagen}>
          <img
            className={style.footerImagen}
            src={require(`../../images/logo.png`)}
            alt="Cerro del Valle"
          />
        </div>

        <div className={style.contactoContainer}>
          <div className={style.contenedorDato}>
            <h3>Datos de contacto</h3>
          </div>

          <div className={style.contactContainer}>

            <div className={style.telefono}>
              <div>
                <i class="bx bxs-phone"></i>
              </div>
              <div className={style.phoneData}>
                <h3>Teléfono:</h3>
                <h4>(2646) 420202</h4>
              </div>
            </div>

            <div className={style.telefono}>
              <div>
                <i class="bx bxs-phone"></i>
              </div>
              <div className={style.phoneData}>
                <h3>Teléfono:</h3>
                <h4>(264) 154369123</h4>
              </div>
            </div>

            <div className={style.telefono}>
              <div>
                <i class="bx bxs-phone"></i>
              </div>
              <div className={style.phoneData}>
                <h3>Teléfono:</h3>
                <h4>(264) 154123196</h4>
              </div>
            </div>

            <div className={style.correo}>
              <div>
                <i class="bx bx-mail-send"></i>
              </div>
              <div className={style.mailData}>
                <h3>Correo Electrónico:</h3>
                <h4> cerrodelvalle@hotmail.com </h4>
              </div>
            </div>

            <div className={style.ubicacion}>
              <div className="icon-map">
                <i class='bx bx-map'></i>
              </div>
              <div className={style.mapData}>
                <h3>Ubicación:</h3>
                <h4> San Juan - Argentina </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className={style.nodos}>
        <h4>© Desarrollado por</h4>
        <h3>NODOS HUB</h3>

        <div className={style.contenedorNodos}>
          <img
            className={style.nodosImagen}
            src={require(`../../images/logo-contacto/logo nodos hub.png`)}
            alt="Logo Nodos Hub"
          />
        </div>

      </div>
    </footer>
  );
};