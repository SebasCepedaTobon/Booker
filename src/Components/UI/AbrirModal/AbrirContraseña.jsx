import React, {useEffect, useState} from 'react'

export const AbrirContraseña = () => {

  const [abrir, setCounter] = useState(false)
  const [cerrar, setCerrar] = useState(false)


  const VentanaContraseña  = () => {
    setCounter(!abrir)
  }
  
  const ocultarContraseña  = () => {
    setCerrar(!cerrar);
  }

 


  useEffect(() => {
    
    
     
    const containerContraseña = document.querySelector('.container-contraseña')
    
  

    

    if(cerrar === true){
        setCerrar(!cerrar)
        containerContraseña.style.top="-500px"
  


  
      


        
        
    }else if(abrir === true){  
        setCounter(!abrir)
        containerContraseña.style.top="20px"
        
        
       
        
    }


  },[cerrar, abrir]);

  return {
    VentanaContraseña,
    ocultarContraseña
  }
}