import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './Admin.module.css'
import { Personas } from '../Personas/Personas'
import { Routes, Route } from 'react-router-dom'

export const Admin = () => {
  return (
    <div className={styles.contenedor}>
      

        {/* Sidebar o navbar */}
        <Sidebar />

        <Routes>
          {/* Contenido central */}
          <Route path="/personas" element={<Personas />} />

        </Routes>

      

    </div>
  )
}
