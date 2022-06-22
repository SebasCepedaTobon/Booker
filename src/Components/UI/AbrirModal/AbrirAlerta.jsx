import React, {useEffect, useState} from 'react'

export const AbrirAlerta = () => {

  const [abrir, setCounter] = useState(false)
  const [cerrar, setCerrar] = useState(false)


  const ventanaAlerta  = () => {
    setCounter(!abrir)
  }
  
  const ocultarAlerta  = () => {
    setCerrar(!cerrar);
  }

 


  useEffect(() => {
    
    
     
    const containerAlerta = document.querySelector('.container-alerta')
    const overlay = document.getElementById('overlay-alert')
    
  

    

    if(cerrar === true){
        setCerrar(!cerrar)
        containerAlerta.style.top="-100px"
  


  
      


        
        
    }else if(abrir === true){  
        setCounter(!abrir)
        containerAlerta.style.top="20px"
        
        
       
        
    }


  },[cerrar, abrir]);

  return {
    ventanaAlerta,
    ocultarAlerta
  }
}