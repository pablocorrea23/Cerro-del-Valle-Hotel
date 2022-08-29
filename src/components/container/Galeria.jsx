import React from 'react'

export const Galeria = () => {
  return (
    <div className="galeria">
        <h3 className='title-galeria'>G a l e r í a    d e    F o t o s</h3>

        <div className="container-img">
            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel1.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel2.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel3.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel4.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel5.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel6.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

            <div className="box-img">
                <a href="#">
                    <figure>
                    <img src={require('../../images/images-galeria/imghotel7.jpg')} alt="css"/>
                    </figure>
                </a>
            </div>

        </div>
    </div>
  )
}
