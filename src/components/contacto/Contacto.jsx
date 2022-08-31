import React, { useState } from 'react'
import styles from './Contacto.module.css'
import axios from 'axios';



function validate(input) {
    let errors = {};
    // eslint-disable-next-line
    let mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let telefono = /^\d{7,14}$/;
    let mensaje = /^[a-zA-ZÀ-ÿ\s]{1,10}$/;
    if (!input.name) {
        errors.name = 'Se requiere un nombre';
    } else if (!input.surname) {
        errors.surname = 'Apellido debe ser completado';
    } else if (!mail.test(input.email)) {
        errors.email = 'Ingrese correo electrónico con formato válido'
    } else if (!telefono.test(input.phone)) {
        errors.phone = 'Ingrese solo números, mínimo 7 caracteres'
    } else if (!mensaje.test(input.msg)) {
        errors.msg = 'Ingrese un motivo de contacto'
    }

    return errors;
};


export const Contacto = () => {

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        //id: new Date().getTime(),
        name: "",
        surname: "",
        email: "",
        phone: "",
        msg: "",
    });



    const handleChange = (e) => {
        //console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        alert('Solicitud cargada correctamente');

        axios({
            method: 'POST',
            url: 'http://192.168.68.118:8000/api/contact', //cambiar a donde hay que pegarle
            data: input
        }).then(res => console.log(res.input))
            .catch(err => console.log(err));



        setInput({
            name: "",
            surname: "",
            email: "",
            phone: "",
            msg: "",
        });

    }

    return (

        <div>

            <h3 className={styles.contacto}>C o n t a c t o</h3>

            <form className={styles.form} action="" method="POST" onSubmit={handleSubmit}>

                <div className="form-nombre">

                    <input
                        type="text"
                        name="name"
                        id="nombre"
                        placeholder="Ingrese su nombre"
                        onChange={(e) => handleChange(e)}
                    /><br />
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                </div>

                <div className="form-apellido">

                    <input
                        type="text"
                        name="surname"
                        id="apellidos"
                        placeholder="Ingrese su apellido"
                        onChange={(e) => handleChange(e)}
                    /><br />
                    {errors.surname && (
                        <p className='error'>{errors.surname}</p>
                    )}
                </div>

                <div className="form-mail">

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingrese su E-mail"
                        onChange={(e) => handleChange(e)}
                    /><br />
                    {errors.email && (
                        <p className='error'>{errors.email}</p>
                    )}
                </div>

                <div className="form-telefono">

                    <input
                        placeholder="Ingrese su teléfono"
                        type="text"
                        name="phone"
                        id="telefono"
                        onChange={(e) => handleChange(e)}
                    /><br />
                    {errors.phone && (
                        <p className='error'>{errors.phone}</p>
                    )}
                </div>

                <div>
                    <textarea 
                    className={styles.textarea} 
                    name='msg' 
                    id='msg' 
                    placeholder='Deja un mensaje'
                    onChange={(e) => handleChange(e)}
                    />
                    <br />
                    {errors.msg && (
                        <p className='error'>{errors.msg}</p>
                    )}
                </div>

                <input className={styles.input} type="submit" value="Enviar" id="submit" /><br />
            </form>

        </div>



    )
}


  // const expresiones = {
  // 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  // 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  // 	password: /^.{4,12}$/, // 4 a 12 digitos.
  // 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  // 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  // }

// export const Contacto = () => {
//     return (
//         <div>
//             <h3 className={styles.contacto}>C o n t a c t o</h3>

//             <div>

//                 <form className={styles.form} action='mailto:pablocorrea34@gmail.com'>
//                     <input type="text" placeholder='Ingresa tu nombre' />
//                     <input type="text" placeholder='Ingresa tu apellido' />
//                     <input type="email" placeholder='Ingresa tu correo electrónico' />
//                     <input type="text" placeholder='Ingresa tu teléfono' />
//                     <textarea placeholder='Dejame un mensaje' />
//                     <input type="submit" value="Enviar" />
//                 </form>

//             </div>
//         </div>
//     )
// }
