import React, {useState, useEffect} from 'react';
// import { GiBookshelf } from 'react-icons/gi';


export const VentanaAgregado = () => {

  const ventanaReserva = () =>{
    console.log("holaaaaa")
  }

  return (
      <div>
        <button className='btn-vermas2' onClick={ventanaReserva}>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              {/* <GiBookshelf className='icon-reservar' /> */}
            </div>
          </div>
          <span>Reservar</span>
        </button>
      </div>
  )
}
