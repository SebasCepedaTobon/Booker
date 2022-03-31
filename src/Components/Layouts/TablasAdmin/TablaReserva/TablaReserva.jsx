import React from 'react'

import { Imagenes } from '../../../UI/Imagenes/Imagenes'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import booker from '../../../../assets/Imagenes/logos/Booker1.png'
import search from '../../../../assets/Imagenes/iconos/search.png'
import perfil from '../../../../assets/Imagenes/perfil.webp'


export const TablaReserva = () => {
  return (
    
    <div className='MainTablaLibros'>
        <div className="bannerLibros">
            <Imagenes url={booker} />
            <div className='BTLibros'>
                <p>Lista de Reservas</p>
                <div className="barra-busquedaa">
                    <input type="text" placeholder='BUSCAR' id='buscarr' />
                    <a href=""><Imagenes url={search} id="searchh"/></a>
                </div>
            </div>                  
        </div>
        <div className='tablasLibros' >
          <div className='tablaIncio'>
            <div className='L'>
              <div className='L0'><p>Imagen</p></div>
              <div className='L1' ><p>Documento</p></div>
              <div className='L2' ><p>Nombre Estudiante</p></div>
              <div className='L3'><p>Grado</p></div>
              <div className='L4'><p>Fecha Reserva</p></div>
              <div className='L5'><p>Opciones</p></div>
            </div>
            <div className='TablaLibros' >

            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>


            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
              <BsBookmarkCheckFill className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>1°</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
                <div className='L0'>
                <BsBookmarkCheckFill className='img'/>
                </div>
                <div className='L1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='L2'><p>Santiago Rincon Cortes</p></div>
                <div className='L3'><p>2°</p></div>
                <div className='L4'><p>22/10/2022</p></div>
                <div className='L5'>
                <FaUserEdit className='edit'/>
                <AiFillDelete className='delete'/>     
              </div>
            </div>




               

            </div>            
         </div>
        </div>
    </div>
  )
}
