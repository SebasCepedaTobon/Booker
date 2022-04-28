import React, {useState, useEffect} from 'react'
import { Navegacion } from '../../UI/Navegacion/Navegacion'







export const Header = () => {

  const [libros, setLibros] = useState([]);
  const [Tablaslibros, setTablaLibros] = useState([]);
  const [busqueda, setbusqueda] = useState("");


  const peticionLibro = () =>{
    
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then((data) =>{
      setLibros(data.results)
      setTablaLibros(data.results)
      console.log(data.results)
    })

  }

  useEffect(()=>{
    peticionLibro();
  },[])

  const filtrarBusqueda = (terminacionBusqueda) =>{
    let resultadoBusqueda = Tablaslibros.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminacionBusqueda.toLowerCase())
      || elemento.gender.toString().toLowerCase().includes(terminacionBusqueda.toLowerCase())){
        return elemento;
      }
    });
    setLibros(resultadoBusqueda)
  }


  const ChangeBusqueda = (e) =>{
    setbusqueda(e.target.value)
    filtrarBusqueda(e.target.value)

  }




  const buscar = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Navegacion/>
      <div className="banner">
        <div className="banner-contenido">
          <h1 className="poema">¡BUSCA LOS MEJORES LIBROS!</h1>
          <form className="barra-busqueda" onSubmit={buscar}>
            <input 
              type="text" 
              placeholder='BUSCAR' 
              id='buscar' 
              onChange={ChangeBusqueda}
            />
            <button type='submit' className='btn-search'><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <div className="conatiner-table-libros">
            <div className="tabla">
              <div className="container-nombres">
                <h4>Nombres</h4>
                {libros.map((libro => <p>{libro.name}</p>))}
              </div>
              <div className="conatiner-estados">
                <h4>Estados</h4>
                {libros.map((libro => <p>{libro.gender}</p>))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-degrade"></div>
    </div>
  )
}
