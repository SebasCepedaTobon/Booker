import React from 'react'

export const Botones = ({BtnNombre , event, id, clase}) => {
  return (
    <div>
        <button id={id} className ={clase} onClick={event}>{BtnNombre}</button>
    </div>
  )
}
