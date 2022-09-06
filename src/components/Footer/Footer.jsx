import React from "react";

export const Footer = () => {
  ///
  return (
    <footer className="footer">
      <div className="imagen-datos">
        <div className="contenedor-imagen">
          <img
            className="footer-imagen"
            src={require(`../../images/logo.png`)}
            alt="Cerro del Valle"
          />
        </div>

        <div className="contacto-container">
          <div className="contenedor-dato">
            <h3>Datos de contacto</h3>
          </div>

          <div className="contact-container">

            <div className="telefono">
              <div>
                <i class="bx bxs-phone"></i>
              </div>
              <div className="phone-data">
                <h3>Teléfono:</h3>
              <h4>(2646) 420202</h4>
              </div>
            </div>

            <div className="telefono">
              <div>
                <i class="bx bxs-phone"></i>
              </div>
              <div className="phone-data">
                <h3>Teléfono:</h3>
              <h4>(264) 154369123</h4>
              </div>
            </div>

            <div className="telefono">
              <div>
                <i class="bx bxs-phone"></i>
              </div>
              <div className="phone-data">
                <h3>Teléfono:</h3>
              <h4>(264) 154123196</h4>
              </div>
            </div>

            <div className="correo">
              <div>
                <i class="bx bx-mail-send"></i>
              </div>
              <div className="mail-data">
                <h3>Correo Electrónico:</h3>
              <h4> cerrodelvalle@hotmail.com </h4>
              </div>
            </div>

            <div className="ubicacion">
              <div className="icon-map">
                <i class="bx bx-map"></i>
              </div>
              <div className="map-data">
                <h3>Ubicación:</h3>
              <h4> San Juan - Argentina </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="nodos">
          <h4>© Desarrollado por</h4>
          <h3>NODOS HUB</h3>

        <div className="contenedor-nodos">
          <img
            className="nodos-imagen"
            src={require(`../../images/logo nodos hub.png`)}
            alt="Logo Nodos Hub"
          />
        </div>

      </div>
    </footer>
  );
};
