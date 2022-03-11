import React from 'react'

export const Imagenes = ({url, clase, id}) => {
  return (
    <img src={url} className={clase} id={id} alt="" />
  )
}
