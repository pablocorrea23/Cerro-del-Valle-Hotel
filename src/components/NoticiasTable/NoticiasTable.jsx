import React from "react";
import { NoticiasCrudTableRow } from "../NoticiasCrudTableRow/NoticiasCrudTableRow";
import styles from "./NoticiasTable.module.css";

export const NoticiasTable = ({ data, setdataToEdit, deleteData }) => {
  return (
    <div className={styles.box}>
      <hr/>
      <h3>Tabla de Datos</h3>

      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((el) => <NoticiasCrudTableRow key={el.id} el={el} setdataToEdit={setdataToEdit} deleteData={deleteData}/>)            
          ) : (
            <tr>
              <td colSpan="4">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
