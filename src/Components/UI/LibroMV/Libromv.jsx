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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestias consectetur praesentium non nemo sit ab laborum accusamus a placeat iusto quisquam libero, reiciendis officia inventore voluptatum tenetur commodi nulla.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint pariatur! Ducimus magnam deserunt laboriosam sequi nobis pariatur earum quam porro ullam voluptatem consequatur, molestiae, rem cum necessitatibus! Sint.</p>
  
            </div>
            <div className="demoPage">
                <Imagenes url={fondoLibro2}/>
                    <h2>VISIÓN</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestias consectetur praesentium non nemo sit ab laborum accusamus a placeat iusto quisquam libero, reiciendis officia inventore voluptatum tenetur commodi nulla.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint pariatur! Ducimus magnam deserunt laboriosam sequi nobis pariatur earum quam porro ullam voluptatem consequatur, molestiae, rem cum necessitatibus! Sint.</p>
            </div>
            <div className="demoPage">
                <Imagenes url={fondoLibro2}/>
                    <h2>VISIÓN</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestias consectetur praesentium non nemo sit ab laborum accusamus a placeat iusto quisquam libero, reiciendis officia inventore voluptatum tenetur commodi nulla.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint pariatur! Ducimus magnam deserunt laboriosam sequi nobis pariatur earum quam porro ullam voluptatem consequatur, molestiae, rem cum necessitatibus! Sint.</p>
            </div>
        </HTMLFlipBook>
    </div>
  )
}
