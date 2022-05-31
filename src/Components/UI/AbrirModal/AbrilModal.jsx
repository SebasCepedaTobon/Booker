import React, {useEffect, useState} from 'react'

export const AbrirModal = () => {

  const [abrir, setCounter] = useState(false)
  const [cerrar, setCerrar] = useState(false)


  const ventanaReserva  = () => {
    setCounter(!abrir)
  }
  const ocultarReserva  = () => {
    setCerrar(!cerrar);
  }

 


  useEffect(() => {
    //const overlay = document.getElementById('overlay2')
    
     
    const from_tablas2 = document.querySelector('.from-tablas2')
    const overlay = document.getElementById('overlay')

    if(cerrar === true){
        setCerrar(!cerrar)
        overlay.style.visibility = "hidden"
        from_tablas2.style.visibility = "hidden"
        from_tablas2.style.opacity="0"
    }else if(abrir === true){  
        setCounter(!abrir)
        overlay.style.visibility = "visible"
        from_tablas2.style.visibility = "visible"
        from_tablas2.style.top="-10"
        from_tablas2.style.opacity="2"
    }


  },[cerrar, abrir]);

  return {
    ventanaReserva,
    ocultarReserva
  }
}