import React from 'react'
import styles from './Galeria.module.css'

export const Galeria = () => {
    return (


        <div className={styles.galeria}>
            <h3 className={styles.title_galeria}>G a l e r í a    d e    F o t o s</h3>


            <div className={styles.galeria_super}>
                <div className={styles.container_img}>
                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel1.jpg')} alt="css" />
                            </figure>
                        </>
                    </div>

                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel2.jpg')} alt="css" />
                            </figure>
                        </>77
                    </div>

                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel3.jpg')} alt="css" />
                            </figure>
                        </>
                    </div>

                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel4.jpg')} alt="css" />
                            </figure>
                        </>
                    </div>

                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel5.jpg')} alt="css" />
                            </figure>
                        </>
                    </div>

                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel6.jpg')} alt="css" />
                            </figure>
                        </>
                    </div>

                    <div className={styles.box_img}>
                        <>
                            <figure>
                                <img src={require('../../images/images-galeria/imghotel7.jpg')} alt="css" />
                            </figure>
                        </>
                    </div>

                </div>
            </div>

        </div>
    )
}
