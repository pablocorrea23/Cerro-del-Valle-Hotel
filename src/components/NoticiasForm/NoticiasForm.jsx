import React, { useState, useEffect } from 'react';
import styles from './NoticiasForm.module.css';
import swal from 'sweetalert';


const initialForm = {
    titulo: '',
    descripcion: '',
    imagen: '',
    id: null,
}


export const NoticiasForm = ({ createData, updateData, dataToEdit, setdataToEdit }) => {

    // const [archivos, setArchivos] = useState(null); -----------> esto comentado era lo de la imagen que no anda
    // const subirArchivos = e =>{
    //     setArchivos(e);
    // }

    // const insertarArchivos = async() =>{
    //     const f = new FormData();

    //     for(let i = 0; i < archivos.length; i++){
    //         f.append("files", archivos[i]);
    //     }
    // }

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit])

    const [form, setForm] = useState(initialForm);

    const [file, setFile] = useState(null); // este es para subir la imagen

    const selectedHandler = (e) => {  // esto me captura la imagen bien, lo que no puedo hacer es agregarlo al "nuevo estado del formulario"
        setFile(e.target.files[0])
        console.log(e.target.files[0])
        
    }


    const handleChange = (e) => { //aca esta el manejador de la imagen        

        setForm({
            ...form,
            [e.target.name]: e.target.value,
            
        })        

        console.log(form)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.titulo || !form.descripcion ) {  //!form.imagen //     ----> tengo que ver como agrego eso dentro del if
            swal("Datos incompletos", "Por favor complete para enviar");
            return;
        }

        const formData = new FormData();
        formData.append('imagen', file);

        



        if (form.id === null) {
            createData(form, formData);
        } else {
            updateData(form, formData);
        }

        handleReset();


    }

    const handleReset = (e) => {
        setForm(initialForm);
        setdataToEdit(null);
    }


    return (
        <div className={styles.container}>
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>

            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    onChange={handleChange}
                    value={form.titulo}
                />

                <textarea
                    className={styles.textareaNoticias}
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    onChange={handleChange}
                    value={form.descripcion}
                />

                <input
                    className={styles.input}
                    type="file"
                    name="imagen"
                    onChange={selectedHandler}

                    value={form.imagen} //----> lo comento y pongo el de arriba porque me larga error la consola y no puede tomar la 'imagen'

                />

                <input className={styles.button} type="submit" value="Enviar" onClick={handleSubmit} />
                <input className={styles.button} type="reset" value="Limpiar" onClick={handleReset} />

            </form>
        </div>
    )
}
