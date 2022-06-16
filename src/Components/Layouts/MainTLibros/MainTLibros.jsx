import React, {useState, useEffect} from 'react'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import { Libros } from '../../UI/Libros/Libros';
import { Spinner } from '../../UI/Spinner/Spinner';
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'

export const MainTLibros = () => {


    const [libros, setLibros] = useState([])
    const [cargando, setCargando] = useState(true)
  
  
  
    useEffect(()=> {
      setCargando(true);
      fetch("https://bookerbackapi.herokuapp.com/modulos/libros/")
      .then(res => res.json())
      .then((data) =>{
        setLibros(data)
        setCargando(false);
      })
    }, []);
  
    if(cargando) {
      return (
        <Spinner />
      )
    }
  return (
    <>
        <Navegacion3/>
        <div className="contendor-cards-busquedas">
            <div className="cards-busquedas">
                {libros.map((libro) => (
                <Libros
                    key={libro.id_libro}
                    libro={libro}
                />
                ))}
            </div>
          
        </div>
    </>
    
  )
}
