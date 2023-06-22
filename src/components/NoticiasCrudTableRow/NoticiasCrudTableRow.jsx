import React from "react";


export const NoticiasCrudTableRow = ({el, setdataToEdit, deleteData}) => {

  let { titulo, copete, imagen, descripcion, fecha, id} = el;
 
  return (
    <>
      <tr>
        <td>{titulo}</td>
        <td>{copete}</td>
        <td><img src={imagen} alt="css" width={80}/></td>
        <td>{descripcion}</td>
        <td>{fecha}</td>
        <td>
          <button className="btn btn-primary btn-sm" onClick={() => setdataToEdit(el)}>Editar</button>
          <button className="btn btn-danger btn-sm" onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};
