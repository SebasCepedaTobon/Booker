import React, { useState, useEffect } from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import { useParams } from 'react-router';
import { Spinner } from '../../UI/Spinner/Spinner';
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import { Alerta } from '../../UI/Alerta/Alerta';



export const MainLibros = ( ) => {

    

    const [{reservas}, dispatch] = useStateValue();

    const { id_libro } = useParams();
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState(false)
   


    const [libros, setLibros] = useState([])
    console.log(libros)
    

    useEffect(() => {
        setCargando(true);
        fetch("https://bookerbackapi.herokuapp.com/modulos/libros/" + id_libro)
            .then(res => res.json())
            .then((data) => {
                setLibros(data)
                setCargando(false)
            })
    }, [id_libro]);

    if (cargando){
        return (
            <Spinner/>
        )
    }


    const addLibros = () => {
        const id_libro = libros.id_libro
        const imagen_libro = libros.imagen_libro
        const nombre = libros.nombre
        dispatch({
          type: actionTypes.ADD_TO_RESERVA,
          item: {
            id_libro,
            imagen_libro,
            nombre

            }
        })

        setAlerta(!alerta)
       
      }


    return (
        <>
        <Alerta 
            estado={alerta} 
            cambiarEstado={setAlerta}
            
        ><p>Reserva realizada</p>

        </Alerta>
         <Navegacion3/>
        <div className='mainlibros'>
            
            
            <div className="imglibros">
                <Imagenes url={libros.imagen_libro} id="libro" />
            </div>
            <div className="libros2">
            
                <div className="info-libro">
                    <h2 className='titulo'>{libros.nombre}</h2>
                    {libros.autores.map((libro)=>{
                        return(
                            <p>Autor: {libro.nombres} {libro.apellidos}</p>
                        ) 
                    
                    })}
                    <p className='estado'>{libros.estado === "A" ? (
                        <p>Estado: Activo</p>

                    ):(<p>Estado: Inactivo</p>)}
                    </p>
                    
                </div>
                <div className="detalles-libro">
                    <h3 className='detalles'>Detalles del Libro:</h3>
                    <hr />
                    <p className='Editorial'>Editorial: {libros.id_editorial.nombre}</p>
                    <p className='Paginas'>Paginas: {libros.numero_paginas}</p>
                    <p className='capitulos'>Capitulos: {libros.numero_capitulos}</p>
                    <p className='ISBN'>ISBN: {libros.isbn}</p>
                </div>
                <div className="des-libro">
                    <h3 className='detalles'>Descripción:</h3>
                    <hr />
                    <p className='descripcion'>{libros.descripcion}</p>
                </div>
                <button className='btn-reservar' onClick={addLibros}>
                    reservar
                </button>

            </div>
           
        </div>
        </>
        
    )
}
