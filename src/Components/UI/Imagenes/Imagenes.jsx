import React from 'react'
import '../../../Static/Admin.css'
import '../../../Static/MediaQueriesAdmin.css'

export const Imagenes = ({url, clase, id}) => {
  return (
    <img src={url} className={clase} id={id} alt="" />
  )
}
