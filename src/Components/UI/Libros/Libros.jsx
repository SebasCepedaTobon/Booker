
import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import '../../../slick.css'
import { AbrirModal } from '../AbrirModal/AbrilModal';
import { AbrirAlerta } from '../AbrirModal/AbrirAlerta';
import axios from 'axios';




//Product


let num = 0
export const Libros = ({libro}) => {



  const id_estudiante = localStorage.getItem('id_estudiante')

  const url = "https://bookerbackapi.herokuapp.com/modulos/favoritos/"
  let Favoritos = []



  const [ejemplaresDisponibles, setEjemplaresDisponibles] = useState([1])
  const [fechaDisponibles, setFechasDisponibles] = useState([])



  const peticionFechas = () =>{

    axios.get("https://bookerbackapi.herokuapp.com/modulos/de_prestamos/?estado=AC")
    .then(response => {
      setFechasDisponibles(response.data);    
    }).catch(error => {
      console.log(error.message);
    })
  }



  const peticionGetPrestamos = (id_libro) => {
    
    axios.get("https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=D&id_libro__id_libro=" + id_libro)
    .then(response => {
      setEjemplaresDisponibles(response.data);

      if (response.data.length === 0) {
        num = 1
      }else{
        num = 2
      }
    }).catch(error => {
      console.log(error.message);
    })
  }

/*   const peticionGetReserva = () => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?id_estudiante__id_estudiante=" + id_estudiante + "&estado=AC")
    .then(response => {
      setLimiteReservas(response.data);
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })
  } */

  //Funcion que guarda las propiedades del estado de los libros
  const {nombre , id_libro, imagen_libro,  } = libro;

  const [{favoritos}, dispatch] = useStateValue();
  
  const {ventanaReserva} = AbrirModal()
  const {ventanaAlerta} = AbrirAlerta()

  //Funcion para agregar libros a las reservas
  let idLibros
  const addLibros = () => {

    console.log(ejemplaresDisponibles.length);
      console.log(ejemplaresDisponibles);

      console.log(ejemplaresDisponibles.length);
      console.log(ejemplaresDisponibles);

        dispatch({
          type: actionTypes.ADD_TO_RESERVA,
          item: {
            id_libro,
            nombre,
            imagen_libro,
          }
        })
        ventanaReserva()
  }


  const addLibros2 = () =>{

      idLibros = id_libro
      dispatch({
        type: actionTypes.DETALLES_LIBRO,
        id_libro:id_libro
      })
        addLibros()    
      
    } 

    useEffect(() => {
      
      if (num === 1) {
        Swal.fire(
          'El libro no esta disponible',
          'Fecha estimada de disponibilidad: ' + id_prestamos,
         
          
        )
        num = 0
         
      }else if(num === 2){
        addLibros2()
        num = 0 
      }

    }, [ejemplaresDisponibles])
    



  const addFavortios = () =>{

    dispatch({
      type: actionTypes.ADD_TO_FAVORITOS,
      item: {
        id_libro,
        nombre,
        imagen_libro,
      }
    })
    ventanaAlerta()
    peticionGet(id_libro)
  

  }


  const peticionGet=(id_libro)=>{
    Favoritos.push(id_libro)

    peticionPost()
    

  }

  const peticionPost=()=>{
      
    axios.post(url, {
      "id_estudiante": id_estudiante,
      "libros": Favoritos
  }).then(response=>{
      console.log(response);
      
    }).catch(error => {
      console.log(error.message);
    })

  }


  useEffect(() => {
    peticionFechas()

  
 }, [])
 
  let id_prestamos;
  return (
    <>

        <div className="cardss">
        
          <div className="contenedor-libro">
    
            <div className="libro">
              <Imagenes url={libro.imagen_libro} id="libro" />
            </div>
            <div className="btn-card">
              <div className="container_vacio">
              </div>
              <div className="container_botones">
                <button className='btn-agLibro' onClick={() => {
                  peticionGetPrestamos(libro.id_libro)
                }}>
                  <i class="fa-solid fa-book-bookmark"></i>
                </button>

                <button className='off' onClick={addFavortios} id='favoritos'>

                  <i class="fa-solid fa-heart"></i>
                </button>
                <NavLink to={"/Libro/" + libro.id_libro}><button className='btn-verlibro'><i class="fa-solid fa-eye"></i></button></NavLink>
              </div>
            </div>
          </div>
          <div className="blanco" id='blancos'>
            <div className="fechas-devolucion">
            {fechaDisponibles.map(element => {
              let prestamo = element.prestamos
                return(
                  <div>
                    <div>
                      {
                        prestamo.map((element2) => {
                          return(
                            id_prestamos = element2.fec_devolucion
                          )
                        })
                      }
                    </div>
                  </div>
                  )
              })
            }

            </div>
            
            <h2>{libro.nombre}</h2>
            {libro.autores.map(autor =>{
              return(
                <p id='letras'>{autor.nombres} {autor.apellidos}</p>

              )
             
            })}
          </div>
        </div>
       

    </>
  )
}