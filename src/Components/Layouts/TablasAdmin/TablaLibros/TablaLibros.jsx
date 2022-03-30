import React from 'react'
import { Imagenes } from '../../../UI/Imagenes/Imagenes'
import booker from '../../../../assets/Imagenes/logos/Booker1.png'
import search from '../../../../assets/Imagenes/iconos/search.png'
import cienAños from '../../../../assets/Imagenes/cienAños.jpg'


export const TablaLibros = () => {
  return (
    <div className='MainTablaLibros'>
        <div className="bannerLibros">
            <Imagenes url={booker} />
            <div className='BTLibros'>
                <p>Lista de Libros</p>
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
              <div className='L1' ><p>Nombre</p></div>
              <div className='L2' ><p>Autor</p></div>
              <div className='L3'><p>Categoria</p></div>
              <div className='L3'><p>Opciones</p></div>
            </div>
            <div className='TablaLibros' >
            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L3'>
                <button className='button'>
                  <span>EDITAR</span>
                  <div className='liquid'></div>
                </button>     
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
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
