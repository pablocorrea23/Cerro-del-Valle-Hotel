import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import styles from './Personas.module.css';
import 'styled-components'

export const Personas = () => {

  //1- Configuramos los Hooks

  const [users, SetUsers] = useState([]);

  //2- Funcion para mostrar los datos con fectch

  const URL = 'http://192.168.68.103:8000/api/contacto';

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json();
    SetUsers(data);
  }

  useEffect(() => {
    showData();
  }, []);

  //3- Configuramos las columnas para DataTables

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Apellido',
      selector: row => row.apellido,
      sortable: true,
    },
    {
      name: 'Telefono',
      selector: row => row.telefono,
      sortable: true,
    },
    {
      name: 'E-mail',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Mensaje',
      selector: row => row.mensaje,
      sortable: true,
      grow: 3
    }
  ];

  const paginacionOpciones={
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }



  //4- Mostramos la data en DataTables
  return (
    <div className={styles.box}>

      <DataTable
        columns={columns}
        data={users}
        title='Personas contactadas'
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight='600px'
      />

    </div>
  )
}
