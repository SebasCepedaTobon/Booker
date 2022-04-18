import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import booker from '../../../assets/Imagenes/logos/Booker1.png'
import { FaSearch } from 'react-icons/fa';

export const AdminHeader = () => {
  return (
    <div className='AdminHeader'>
        <div className='box-buscadorAdmin'>
            <div className="buscador">
                <input type="text" autofocus="autofocus" placeholder='Buscar...' required/>
                <div className="btn-ico-Buscar">
                    <FaSearch className='ico-Buscar'/>
                </div> 
            </div>                       
        </div>
        <div className='banner-admin' >
            <Imagenes url={booker} />
            <p>Sitio Administrativo Booker</p>
        </div>
    </div>    
  )
}
