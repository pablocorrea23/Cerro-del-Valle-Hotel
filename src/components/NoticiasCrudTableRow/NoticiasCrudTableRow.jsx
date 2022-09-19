import React from "react";
import styles from "./NoticiasCrudTableRow.module.css"

export const NoticiasCrudTableRow = ({el, setdataToEdit, deleteData}) => {

  let { titulo, imagen, descripcion, id} = el;
 
  return (
    <>
      <tr>
        <td>{titulo}</td>
        <td><img className={styles.img_molino} src={imagen} alt="css" width={80}/></td>
        <td>{descripcion}</td>
        <td>
          <button className={styles.button} onClick={() => setdataToEdit(el)}>Editar</button>
          <button className={styles.button} onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};
