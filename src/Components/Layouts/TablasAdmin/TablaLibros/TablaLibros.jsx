import React, {useState, useEffect, Component} from 'react';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import { HooksTLibros } from './HooksTLibros';



export class TablaLibros extends HooksTLibros  {
    
    /* this.lleno.push(categorias.id);
    inputCate.value = this.lleno
    console.log(this.lleno + " Estoy en lleno"); */ 

  
    componentDidMount() {
      this.peticionGet();
      this.cargarCate();
      this.cargarAutores();
      this.cargarEdtorial();
      this.cargarIdiomas();
    }

    /*Funcionamineto de imagen, con este se mostrata el nombre
    de la imagen cargada*/
  
/* 
  mostrarImg = () =>{
    const inputImg = document.getElementById('inputImg');
    const nomImg = document.querySelector('.nomImg')
    nomImg.innerText = inputImg.files[0].name
  } */

  j = []
 
  render() {
    const {form}=this.state;
    
    return(

    <div className='MainAdministrativo'>
      
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className="box-Header-Admin">
        <AdminHeader/>
        <div className='box-Tabla' >
          <div className='Tabla'>
            <div className="TituloLibro">
              Libros
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1'><p>Nombre</p></div>
              <div className='td-2'><p>Ejemplares</p></div>
              <div className='td-3'><p>Categorias</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >              
                  {this.state.data.map(libro=>{
                    this.j = libro.categorias
                    
                    return(
                      <div className='tr-1'>
                        
                        <div className='td-0'>
                          <Imagenes clase='img' url={libro.imagen_libro} />
                        </div>
                        <div className='td-1'>
                          <p className='L1P'>{libro.nombre}</p>
                        </div>                        
                        <div className='td-2'>{libro.numero_paginas}</div>
                        
                        <div className='td-3'>
                          <p>                          
                          {
                            this.j.map(element => element.nombre).join(', ')
                          }
                          </p>
                        </div>
                        
                        <div className="td-6">
                        <input className='inputCheckbox' type="checkbox" />
                        </div>

                        { /*QUEDO EN LOS BOTONES*/ }
                        <div className='td-5'>
                          <i  onClick={()=>{this.seleccionarLibro(libro); this.abrirForm()}} class="fa-solid fa-pen-to-square"></i>
                          <i  onClick={()=>{this.seleccionarLibro(libro); this.setState({modalEliminar: true}); this.eliminacion()}} class="fa-solid fa-trash-can" ></i>
                        </div>
                      </div>
                    )
                  })}
              
                </div>
              </div>

        <div id='Activar-From' className="Activar-From">
        <i onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.abrirForm()}} class="fa-solid fa-folder-plus"></i>
        </div> 
        </div>
      </div>
      <div id='overlay' className='overlay'>
        <div className="from-tablas">            
          <div className='Libros-from' >
            <div className="from-Titulo">
            <div className="Desactivar-From">
              <i onClick={()=>this.cerrarForm()} class="fa-solid fa-xmark"></i>
            </div>
            {this.state.tipoModal=='insertar'?
                    <h1 className="btn btn-success" >
                    NUEVO LIBRO
                  </h1>: <h1 className="btn btn-primary">
                    ACTUALIZAR LIBRO
                  </h1>
                }               
            </div>
            <form method="">
              <div className='boxs-inputs'>          
                <div className="box-input">
                  <input name='isbn' type="number" onChange={this.handleChange} value={form?form.isbn: ''} required/>
                  <span></span>
                  <label>ISBN</label>
                </div>
           
                <div className="box-input">
                  <input name='nombre' onChange={this.handleChange} value={form?form.nombre: ''} id='nombreLibro' type="text" required/>
                  <span></span>
                  <label>Nombre</label>
                </div>

                <div className="box-input">
                  <input id='NumEmplares' type='number' name='cant_ejemplares' onChange={this.handleChange} value={form?form.cant_ejemplares: ''} required/>
                  <span></span>
                  <label>Cantidad Ejemplares</label>
                </div> 


              </div>

              {/* <div class="file-select" id="src-file1" >
                  <input 
                  type="file" name="imagen_libro" onChange={(e)=>this.subirImg(e.target.files)} />
                  <h5 className='nomImg'></h5>
              </div> */}
    

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="number" name='numero_paginas' onChange={this.handleChange} value={form?form.numero_paginas: ''}  required/>
                  <span></span>
                  <label>N° Paginas</label>
                </div>

                <div className="box-input">
                  <input type="number" name='numero_capitulos' onChange={this.handleChange} value={form?form.numero_capitulos: ''} required/>
                  <span></span>
                  <label>Numero Capitulos</label>
                </div>

                <div className="box-input">
                  <input type="text" name='edicion' onChange={this.handleChange} value={form?form.edicion: ''} required/>
                  <span></span>
                  <label>Edicion</label>
                </div>
                
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                    <input type="text" name='anexos' onChange={this.handleChange} value={form?form.anexos: ''} required/>
                    <span></span>
                    <label>Anexos</label>
                </div>

                <div className="box-input">
                  <input name='presentacion' onChange={this.handleChange} value={form?form.presentacion: ''} type="text" required/>
                  <span></span>
                  <label>Presentación</label>
                </div> 

                <div className="box-select">
                  <select id='selectEdito' onChange={this.handleChange} >
                    <option value=''>Editorial...</option>
                    {this.editorial.map((element, key)=>{
                      return(
                        <option className='optionSelecionar' key={key} value={element.id_editorial}>{element.nombre}</option>
                      )
                      })}
                  </select>
                </div>
              </div>

            
              <div className="boxs-inputs">

              <div className="box-select">
                  <select id='selectIdioma' onChange={this.handleChange} >
                    <option value="" selected >Idioma...</option>
                    {this.idioma.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_idioma}>{element.nombre}</option>
                      )
                      })}
                  </select>
                </div>

                <div className="box-select">                  
                  <select id='selectEstado' onChange={this.handleChange}>
                      <option value="">Estado...</option>
                      <option value="A">Activo</option>
                      <option value="I">Inactivo</option>
                  </select>
                </div>


                <div className="box-textareaa">
                  <textarea placeholder='Palabras Clave...' name='palabras_clave' onChange={this.handleChange} value={form?form.palabras_clave: ''}  ></textarea>
                  
                </div>                
              </div>


              <div className="boxs-inputs">
              <div className="box-select">
                  <textarea className='textareaCate' readOnly='readOnly' id='inputAuto' type="text" />
                  <select onChange={this.peticionGetAutoLibro} id='selecAuto'>
                  <option value="" selected>Autores...</option>
                    {this.autores.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_autor}>{element.nombres} {element.apellidos}</option>
                      )
                        })}                  
                  </select>
                </div>

                <div className="box-select">
                  <textarea className='textareaCate' readOnly='readOnly' id='inputCate' type="text"/>
                  <select onChange={this.peticionGetCateLibro} id='selecCate'>
                    <option value="" selected>Categorias...</option>
                    {this.categorias.map(element=>{
                      return(
                          <option className='holaOption' name={element.nombre} value={element.id_categoria}  >{element.nombre}</option>
                          )
                        })}                  
                  </select>
                </div>

                
                <div className="box-textareaa box-textareaDescripcion">
                  <textarea placeholder='Descripción...' name="descripcion" onChange={this.handleChange} value={form?form.descripcion: ''}  ></textarea>
                  
                </div>               
              </div> 

              <div className="btnsFormulario">
                {this.state.tipoModal=='insertar'?
                    <button className="btnFor btn-agregar" onClick={()=>this.peticionPost()}>
                    ANEXAR LIBRO
                  </button>: <button className="btnFor btn-actializar" onClick={()=>this.peticionPatch()}>
                    Actualizar
                  </button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
