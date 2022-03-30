import React from 'react'

import { Imagenes } from '../../../UI/Imagenes/Imagenes'
import booker from '../../../../assets/Imagenes/logos/Booker1.png'
import search from '../../../../assets/Imagenes/iconos/search.png'
import perfil from '../../../../assets/Imagenes/perfil.webp'

export const TablaEstudiantes = () => {
  return (
    
    <div className='MainTablaLibros'>
        <div className="bannerLibros">
            <Imagenes url={booker} />
            <div className='BTLibros'>
                <p>Lista de Estudiantes</p>
                <div className="barra-busqueda">
                    <input type="text" placeholder='BUSCAR' id='buscar' />
                    <a href=""><Imagenes url={search} id="search"/></a>
                </div>
            </div>                  
        </div>
        <div className='tablasLibros' >
          <div className='tablaIncio'>
            <div className='L'>
              <div className='L0'><p>Imagen</p></div>
              <div className='L1' ><p>Documento</p></div>
              <div className='L2' ><p>Nombre Completo</p></div>
              <div className='L3'><p>Grado</p></div>
              <div className='L3'><p>Opciones</p></div>
            </div>
            <div className='TablaLibros' >
            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'>Sebastian Cepeda</div>
              <div className='L3'>1°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>1023762421</p>
              </div>
              <div className='L2'>Santiago Rincon</div>
              <div className='L3'>2°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>2325766756</p>
              </div>
              <div className='L2'>Elkin Mendez</div>
              <div className='L3'>5°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>1006788976</p>
              </div>
              <div className='L2'>Kevin Usama</div>
              <div className='L3'>9°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>


            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>1002633624</p>
              </div>
              <div className='L2'>Sebastian Cepeda</div>
              <div className='L3'>1°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>1023762421</p>
              </div>
              <div className='L2'>Santiago Rincon</div>
              <div className='L3'>2°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>2325766756</p>
              </div>
              <div className='L2'>Elkin Mendez</div>
              <div className='L3'>5°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={perfil} />
              </div>
              <div className='L1'>
                <p className='L1P'>1006788976</p>
              </div>
              <div className='L2'>Kevin Usama</div>
              <div className='L3'>9°</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>
            

            </div>            
         </div>
        </div>
    </div>
  )
}
