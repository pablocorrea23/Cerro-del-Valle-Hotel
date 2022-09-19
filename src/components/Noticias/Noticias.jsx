import React, { useState, useEffect } from 'react'
import { NoticiasForm } from '../NoticiasForm/NoticiasForm'
import { NoticiasTable } from '../NoticiasTable/NoticiasTable';
import { helpHttp } from '../../helpers/helpHttp'
import styles from './Noticias.module.css';
import swal from 'sweetalert';
import { Loader } from '../Loader/Loader';
import { Mensaje } from '../Mensaje/Mensaje';




export const Noticias = () => {

  const [db, setDb] = useState(null);

  const [dataToEdit, setdataToEdit] = useState(null);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://192.168.68.129:8000/api/inicio';

  useEffect(() => {
    setLoading(true);

    helpHttp().get(url).then((res) => {
      
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null)
        setError(res)
      }

      setLoading(false);
    })
  }, [url]);



  const createData = (data) => {
    //data.id = Date.now();
    //console.log(data);

    let options = { body: data, headers: { 'Content-Type': 'application/json' }};

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    
  };



  const updateData = (data) => {

    let endpoint = `${url}/${data.id}`

    let options = { body: data, headers: { 'Content-Type': 'application/json' } };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };




  const deleteData = (id) => {

    swal({
      title: (`Está seguro que desea eliminar la noticia '${id}'?`),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let endpoint = `${url}/${id}`;
          let options = { headers: { 'Content-Type': 'application/json' } };

          api.del(endpoint, options).then(res => {
            console.log(res);
            if (!res.err) {
              let newData = db.filter((el) => el.id !== id);
              setDb(newData);
            } else {
              setError(res);
            }
          })

          swal("La noticia fue eliminada correctamente!", {
            icon: "success",
          });
        } else {
          swal("No hubo cambios en la noticia");
          return
        }
      });
  };

  return (
    <div className={styles.box}>

      <h2>CRUD NOTICIAS</h2>

      <NoticiasForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setdataToEdit={setdataToEdit} />

      {loading && <Loader />}

      {error && <Mensaje msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}

      {db && <NoticiasTable data={db} setdataToEdit={setdataToEdit} deleteData={deleteData} />}

    </div>
  )
}
