import React, { useState } from 'react'
import styles from './Contacto.module.css'
import axios from 'axios';
import swal from 'sweetalert';



function validate(input) {
    let errors = {};
    // eslint-disable-next-line
    let mail = /^[a-z\.\_\-0-9]{1,20}@[a-z]{1,16}\.[a-z\.]{1,12}$/i;
    let telefono = /^\+?[0-9]{7,16}$/;
    let mensaje = /^[a-zA-ZÀ-ÿ\s]{1,10}$/;
    if (!input.nombre) {
        errors.nombre = 'Se requiere un nombre';
    } else if (!input.apellido) {
        errors.apellido = 'Apellido debe ser completado';
    } else if (!mail.test(input.email)) {
        errors.email = 'Ingrese correo electrónico con formato válido'
    } else if (!telefono.test(input.telefono)) {
        errors.telefono = 'Ingrese solo números, mínimo 7 caracteres'
    } else if (!mensaje.test(input.mensaje)) {
        errors.mensaje = 'Ingrese un motivo de contacto'
    }

    return errors;
};


export const Contacto = () => {

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        //id: new Date().getTime(),
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
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

        axios({
            method: 'POST',
            url: 'http://192.168.68.103:8000/api/contacto', //cambiar a donde hay que pegarle
            data: input
        }).then(res => res.data)
            .then(datos => { console.log(datos) } )

            .catch(err => alert(err));

        setInput({
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            mensaje: "",
        });
         e.target.reset(); //---> esto me limpia todos los campos del formulario

        swal("Perfecto!", "Tus datos fueron cargados correctamente!", "success");
    }
    

    return (

        <div>

            <h3 className={styles.contacto}>C o n t a c t o</h3>

            <div className={styles.contenedor_form}>

                <form className={styles.form} action="" method="POST" onSubmit={handleSubmit}>

                    <div className="form-nombre">

                        <input
                            type="text"
                            name="nombre"
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
                            name="apellido"
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
                            name="telefono"
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
                            name='mensaje'
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


                <div className={styles.img_form}>
                    <img className={styles.img_molino} src={require('../../images/images-galeria/imagen fom.png')} alt="css" width={600} />
                </div>

            </div>


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

