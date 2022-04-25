import React, { useState, useEffect } from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import { useParams } from 'react-router';
import { Spinner } from '../../UI/Spinner/Spinner';


export const MainLibros = ( ) => {

    const [{reservas}, dispatch] = useStateValue();

    const { LibroId } = useParams();
    const [cargando, setCargando] = useState(true);


    const [libros, setLibros] = useState(null)

    useEffect(() => {
        setCargando(true);
        fetch("https://rickandmortyapi.com/api/character/" + LibroId)
            .then(res => res.json())
            .then((data) => {
                setLibros(data)
                setCargando(false)
            })
    }, [LibroId]);

    if (cargando){
        return (
            <Spinner/>
        )
    }


    const addLibros = () => {
        const image = libros.image
        const name = libros.name
        dispatch({
          type: actionTypes.ADD_TO_RESERVA,
          item: {
              image,
              name,

            }
        })
      }


    return (
        <div className='mainlibros'>
            <div className="imglibros">
                <Imagenes url={libros.image} id="libro" />
            </div>
            <div className="libros2">
                <div className="info-libro">
                    <h2 className='titulo'>{libros.name}</h2>
                    <p className='autor'>Mario Mendoza</p>
                    <p className='estado'>Estado:</p>
                </div>
                <div className="detalles-libro">
                    <h3 className='detalles'>Detalles del Libro:</h3>
                    <hr />
                    <p className='año'>Año:</p>
                    <p className='Editor'>Editor:</p>
                    <p className='Paginas'>Paginas:</p>
                    <p className='Idioma'>Idioma:</p>
                    <p className='Fecha'>Fecha:</p>
                    <p className='Tamaño'>Tamaño:</p>
                    <p className='Licencia'>Licencia:</p>
                    <p className='ISBN'>ISBN:</p>
                </div>
                <div className="des-libro">
                    <h3 className='detalles'>Descripción:</h3>
                    <hr />
                    <p className='descripcion'>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ipsa nisi hic rem maxime
                        deserunt, ratione atque obcaecati natus minus nobis molestiae
                        quae, nostrum tenetur, et sed quia soluta tempora repellat?</p>
                </div>
                <button className='btn-vermas2' onClick={addLibros}>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            {/* <GiBookshelf className='icon-reservar' /> */}
                        </div>
                    </div>
                    <span>Reservar</span>
                </button>
            </div>
        </div>
    )
}
