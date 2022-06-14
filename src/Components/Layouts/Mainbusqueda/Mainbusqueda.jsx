import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Libros } from '../../UI/Libros/Libros';
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3';
import { Spinner } from '../../UI/Spinner/Spinner';




export const Mainbusqueda = () => {



    const { nombre } = useParams();

    const [cargando, setCargando] = useState(true);
   


    const [libros, setLibros] = useState([])
    console.log(libros)
    

    useEffect(() => {
        setCargando(true);
        fetch('https://bookerbackapi.herokuapp.com/modulos/libros/?search='+nombre)
            .then(res => res.json())
            .then((data) => {
                setLibros(data)
                setCargando(false)
            })
    }, [nombre]);

    if (cargando){
        return (
            <Spinner/>
        )
    }
    

  return (
    <>
        <Navegacion3/>
        <div className="contendor-cards-busquedas">
        <div className="h2-busquedas">
            <h2>Resultados para "{nombre}"</h2>
        </div>
        
        <div className='cards-busquedas'>
        
        
        {libros.length === 0 ? (<div className='no-reserva'>
                  <h3>No se encuentran resultados</h3>
                  
                </div>) :
                    (
                        <>
                         {libros.map((libro => <Libros key={libro.id} libro={libro}/>))}
                        </>
                      )
                }
          
        </div>
    </div>
    </>
    
      
    
  )
}
