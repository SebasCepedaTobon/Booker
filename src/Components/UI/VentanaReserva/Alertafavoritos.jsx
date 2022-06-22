import React, {useEffect, useState} from 'react'
import { AbrirAlerta } from '../AbrirModal/AbrirAlerta'


export const Alertafavoritos = () => {



  const { ocultarAlerta } = AbrirAlerta()




  return (
    <div className="overlay-alerta" id='overlay-alert'>
        <div className="container-alerta">
            <p>Libro agregado a favoritos exitosamente</p>
            <div className="container-time">
              {setTimeout(()=>{
                ocultarAlerta()
              }, 4000)
              }
            </div>
        </div>
    </div>
  )
}