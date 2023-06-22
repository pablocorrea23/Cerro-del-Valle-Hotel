import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import styles from './Personas.module.css';
import 'styled-components'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { helpHttp } from '../../helpers/helpHttp'

export const Personas = () => {

  //1- Configuramos los Hooks

  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  //2- Funcion para mostrar los datos con fectch

  const URL = 'http://192.168.68.139:81/api/contacto';
  let api = helpHttp();

  // const showData = async () => {
  //   const response = await fetch(URL)
  //   const data = await response.json();
  //   SetUsers(data);
  // }

  // useEffect(() => {
  //   showData();
  // }, []);


  // const onDelete = async (id) => {

  //   try {
  //     const { data } = await axios.post('url para eliminar lo que me dé el back');
  //     console.log(data.message);
  //     showData()

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  useEffect(() => {


    // axios({
    //   method: 'GET',
    //   url: 'http://192.168.68.129:8000/api/admin/noticias', //cambiar a donde hay que pegarle
    //   data: input
    // }).then(res => res.data)
    //   .then(datos => { console.log(datos) })

    //   .catch(err => alert(err));

    helpHttp().get(URL).then((data) => {

      if (!data.err) {
        setUsers(data); //con maxi seria res solo, con leo es 'noticias'
        console.log(data);
        setError(null);
      } else {
        setUsers(null)
        setError(data)
      }

    })

    .catch(err => console.log(err));


  }, [URL]);



  const deleteData = (id) => {

    swal({
      title: (`Está seguro que desea eliminar el contacto '${id}'?`),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let endpoint = `${URL}/${id}`;
          let options = { headers: { 'Content-Type': 'application/json' } };

          api.del(endpoint, options).then(res => {
            console.log(res);
            if (!res.err) {
              let newData = users.filter((el) => el.id !== id);
              setUsers(newData);
            } else {
              setError(res);
            }
          })

          swal("El contacto fue enviado a la papelera correctamente!", {
            icon: "success",
          });
        } else {
          swal("No hubo cambios en contactos");
          return
        }
      });
  };



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
    },
    {
      name: 'Acción',
      cell: row => <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteData(row.id)}>Eliminar</button>,
      sortable: true,
    }
  ];

  const paginacionOpciones = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }





  //4- Mostramos la data en DataTables
  return (
    <div className={styles.box}>

      <h1>React DataTables</h1>

      <div className={styles.contenedorLink}>
        <div className={styles.link}>
          <Link to='/admin'><button>Volver a panel Admin</button></Link>
        </div>

        <div className={styles.link}>
          <Link to='/papelera'><button>Papelera</button></Link>
        </div>
      </div>

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
