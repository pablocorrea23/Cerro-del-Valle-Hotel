import React from 'react'

export const Contacto = () => {
    return (
        <div>
            <h3 className="contacto">Contacto</h3>

            <div>

                <form className='form' action='mailto:pablocorrea34@gmail.com'>
                    <input type="text" placeholder='Ingresa tu nombre' />
                    <input type="text" placeholder='Ingresa tu apellido' />
                    <input type="email" placeholder='Ingresa tu correo electrónico' />
                    <input type="text" placeholder='Ingresa tu teléfono' />
                    <textarea placeholder='Dejame un mensaje' />
                    <input type="submit" value="Enviar" />
                </form>

            </div>
        </div>
    )
}
