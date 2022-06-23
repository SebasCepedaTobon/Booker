
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


export const Libros = ({libro}) => {

  let limiteDeReservas2

  const id_estudiante = localStorage.getItem('id_estudiante')

  const url = "https://bookerbackapi.herokuapp.com/modulos/favoritos/"
  const urlLibros = "https://bookerbackapi.herokuapp.com/modulos/libros/"
  let Favoritos = []


  const [limitePrestamos, setLimitePresgamo] = useState([])
  const [limiteReservas, setLimiteReservas] = useState([])
  const [limiteEjemplares, setLimiteEjemplares] = useState([])



  const peticionGetPrestamos = (idLibros) => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=D&id_libro__id_libro=" + idLibros)
    .then(response => {
      setLimitePresgamo(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionGetReserva = () => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?id_estudiante__id_estudiante=" + id_estudiante + "&estado=AC")
    .then(response => {
      setLimiteReservas(response.data);
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })
  }

  //Funcion que guarda las propiedades del estado de los libros
  const {nombre , id_libro, imagen_libro,  } = libro;

  const [{favoritos}, dispatch] = useStateValue();
  
  const {ventanaReserva} = AbrirModal()
  const {ventanaAlerta} = AbrirAlerta()

  //Funcion para agregar libros a las reservas
  let idLibros
  const addLibros = () => {

    
    
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

    /* limiteDeReservas2 = limiteReservas.length + limitePrestamos.length

    console.log(limiteReservas.length);
    console.log(limitePrestamos.length);
    
    console.log(limiteDeReservas2);
    

    if (limiteDeReservas2 >= 3) {
      Swal.fire({
        title: 'Limite completado (3)',
        text : 'Tienes ' +limiteReservas.length + " reservas y " + limitePrestamos.length + " prestamos",
        imageUrl: 'http://res.cloudinary.com/bookerimg/image/upload/v1655999157/rszijzzj97eg3jq2ahft.png'
        
      }
      )   
    }else{} */

      idLibros = id_libro
      dispatch({
        type: actionTypes.DETALLES_LIBRO,
        id_libro:id_libro
      })

      peticionGetPrestamos(idLibros)

      if (limitePrestamos.length === 0) {
        alert("No se pued HP")
      }else{
        addLibros()      
      }

  }

  /*

  const useCount = () =>{

    const [counter,setCounter] = useState(0)
    console.log(counter)

      const btnoff = () =>setCounter(counter+1)

      return{
        counter,
        btnoff
      }

  }
  
    const {counter,btnoff} = useCount()

  useEffect(()=>{
    const btnCard = document.getElementById('favoritos')
    const blanco = document.getElementById('libro')



    if(counter % 2 == 0){
      blanco.classList.add('on')
      blanco.classList.remove('off')

    }
    else{
      blanco.classList.add('off')
      blanco.classList.remove('on')
    
      
    }


  },[counter])

*/



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
    peticionPost()
    

  
  }


  const peticionGet=()=>{
    console.log("entra get");
    for (let index = 0; index < favoritos.length; index++) {
        Favoritos.push( favoritos[index].id_libro)
    }

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
    peticionGetReserva()
  }, [])
  

  useEffect(() => {
     peticionGet()
 }, [])
 

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
                <button className='btn-agLibro' onClick={addLibros2}>
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