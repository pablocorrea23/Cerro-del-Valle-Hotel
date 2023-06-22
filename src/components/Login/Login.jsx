import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Admin } from '../Admin/Admin'
import style from "../Login/Login.module.css";
import "animate.css";
import axios from "axios";


export const Login = () => {
    
    // const [password, setPassword] = useState("");

    const [administrador, setAdministrador] = useState({
        administrador: "",
        password: "",
    });

    // function validateForm() {
    //     return administrador.length > 0 && password.length > 0;
    // }

    const handleChange = (e) => {
        setAdministrador({
            ...administrador,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://192.168.68.103:8000/api/admin", //cambiar a donde hay que pegarle
            data: administrador,
        })
            .then((res) => res.data)
            .then((datos) => {
                console.log(datos); //hacer que si llegan datos correctamnte ingrese a la pagina de admin(aca estaria el navlink)
            })

            .catch((err) => alert(err));

        setAdministrador({
            administrador: "",
            password: "",
        });
        e.target.reset(); //---> esto me limpia todos los campos del formulario
    }

    return (
        <div className={style.login}>
            <div className={style.loginCaja}>
                <div className={style.tituloLogin}>
                    <h3 id="login">
                        Bienvenidos
                    </h3>
                    <img
                        className={style.imgLogin}
                        src={require("../../images/logo.png")}
                        alt="logocss"
                        width={90}
                    />
                </div>

                <div>
                    <form
                        className={style.forms}
                        action=""
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <label>Admistrador</label>
                        <input
                            type="text"
                            name="administrador"
                            id="administrador"
                            placeholder="Ingrese su nombre"
                            onChange={(e) => handleChange(e)}
                        />

                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Ingrese constaseña"
                            onChange={(e) => handleChange(e)}
                        />

                        <div className={style.buttonLogin}>
                            
                            <button
                                className={style.button}
                                block="true"
                                size="lg"
                                type="submit"
                                // disabled={validateForm()}
                                onClick={handleSubmit}
                             >
                                <NavLink to='/admin' element={<Admin />}>Ingresar</NavLink>
                            </button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>

        // <div className={style.loginPage}>
        //     <div className={style.form}>
        //         <form className={style.loginForm}>
        //             <input type="text" placeholder="username" />
        //             <input type="password" placeholder="password" />
        //             <button>login</button>
        //             <p className={style.message}>Not registered? <a href="#">Create an account</a></p>
        //         </form>
        //     </div>
        // </div>
    );
};
