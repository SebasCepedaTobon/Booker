import React from 'react'
import HTMLFlipBook from "react-pageflip";
import { Imagenes } from '../Imagenes/Imagenes'
import fondoLibro from '../../../assets/Imagenes/LibroMS/fondoLibro.jpg'
import fondoLibro2 from '../../../assets/Imagenes/LibroMS/fondoLibro2.jpg'
import portadaLibro from '../../../assets/Imagenes/LibroMS/portadaLibro.jpg'
import logo from '../../../assets/Imagenes/logos/bookerLetrasNegras.png'

export const Libromv = () => {
  return (
    <div className='container-libro-ms'>
        <HTMLFlipBook width={400} height={600}>
            <div className="demoPage1">
                <Imagenes url={portadaLibro}/>
                <h2>MISIÓN Y VISIÓN</h2>
            </div>
            <div className="demoPage">
                <Imagenes url={fondoLibro}/>
                    <h2>MISIÓN</h2>
                    <p>La misión de Booker es apoyar a las bibliotecas estudiantiles que cuentan con problemas de gestión, implementando funcionalidades desde nuestra plataforma web, para que asi los bibliotecarios puedan gestionar la información de una manera más eficaz, con pocas perdidas de tiempo e información, a la vez, que los estudiantes puedan consultar y reservar sus libros favoritos disponibles en la biblioteca.</p>
  
            </div>
            <div className="demoPage">
                <Imagenes url={fondoLibro2}/>
                    <h2>VISIÓN</h2>
                    <p>La visión de Booker es ser el sistema de gestión bibliotecario más grande del país, llegando a diferentes bibliotecas de todas las regiones de Colombia, llegar a ser reconocidos por diferentes estudiantes que disfruten de la lectura, e incentivar el uso de estas bibliotecas en muchos lugares, y tener la posibilidad de llegar a bibliotecas institucionales fuera del país, adaptando nuestra plataforma a las diferentes instituciones.</p>
            </div>
            <div className="demoPage">
                <div className="logoMV">
                    <Imagenes url={logo}/>
                </div>
            </div>
        </HTMLFlipBook>
    </div>
  )
}
