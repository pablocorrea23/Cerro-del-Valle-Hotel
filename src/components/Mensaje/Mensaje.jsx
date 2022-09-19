import React from 'react'

export const Mensaje = ({msg, bgColor}) => {

    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        backgroundColor: bgColor,
    }

  return (
    <div style={styles}>
        <p>{msg}</p>
    </div>
  )
}
