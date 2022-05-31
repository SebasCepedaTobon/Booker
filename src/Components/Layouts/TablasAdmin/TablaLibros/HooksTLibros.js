import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { ApiCate } from '../apiCate/ApiCate'

export class HooksTLibros extends ApiCate {

    /*Estado del formulario al renderizar la pagina*/
    state={
        data:[],
        cate:[],
        auto:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
          id_libro: '',
          nombre: '',
          isbn: '',
          presentacion: '',
          numero_paginas: '',
          numero_capitulos: '',
          edicion: '',
          descripcion: '',
          cant_ejemplares: '',
          anexos: '',
          palabras_clave: '',
          tipoModal: '' 
        },
      }

      /*Metodo post para crear un nuevo libro*/
        
        peticionPost=async()=>{

            delete this.state.form.id_libro;
            await axios.post(this.url,this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
            
            }).catch(error=>{
            console.log(error.message);
            })
        }

        /*Metodo patch para editar un nuevo libro*/

        peticionPatch=()=>{
            axios.put(this.url+this.state.form.id_libro+"/", this.state.form).then(response=>{
              this.modalInsertar();
              this.peticionGet();
            }).catch(error=>{
              console.log(error.message);
            })
          }
            /*Metodo Deleta para desactivar o eliminar un nuevo libro*/

          peticionDelete=()=>{
            axios.delete(this.url+this.state.form.id_libro).then(response=>{
              this.setState({modalEliminar: false});
              this.peticionGet();
            }).catch(error=>{
              console.log(error.message);
            })
          }


          /* modal insertar antigua, esta ya se implemento en otro Metodo
          aun asi se deja en caso de necesitarse */
          /* modalInsertar=()=>{
            this.setState({modalInsertar: !this.state.modalInsertar});
          }
         */

/*           funcionamineto de agregar categorias multiples */

          llenoCate = []
          llenoInputCate = []
            
            peticionGetCateLibro=()=>{
              const categorias = document.getElementById('selecCate')
              const inputCate = document.getElementById('inputCate')
              console.log(categorias.value);
              axios.get("https://bookerbackapi.herokuapp.com/modulos/categorias/" + categorias.value).then(response=>{
                this.setState({cate: response.data});
                console.log(this.state.cate.nombre);
                console.log(this.state.cate.id_categoria);
                this.llenoCate.push(this.state.cate.id_categoria)
                this.llenoInputCate.push(" " + this.state.cate.nombre)
                inputCate.value = this.llenoInputCate
                console.log(this.llenoCate);
              }).catch(error=>{
                console.log(error.message);
              })
            }
        
/*         funcion para agregar autores multiples */
          llenoAuto = []
          llenoInputAuto = []
            
            peticionGetAutoLibro=()=>{
              const autores = document.getElementById('selecAuto')
              const inputAuto = document.getElementById('inputAuto')
              axios.get("https://bookerbackapi.herokuapp.com/modulos/autores/" + autores.value).then(response=>{
                this.setState({auto: response.data});
                console.log(this.state.auto);
                this.llenoAuto.push(this.state.auto.id_autor)
                console.log(this.llenoAuto);
                this.llenoInputAuto.push( " " + this.state.auto.nombres + " " + this.state.auto.apellidos)
                console.log(this.llenoInputAuto);
                inputAuto.value = this.llenoInputAuto
              }).catch(error=>{
                console.log(error.message);
              })
            }

            /*Con la siguiente funcion se carga el formulario con los datos dependiento
            que libro selecione para de esta forma editarlo*/

            seleccionarLibro=(libro)=>{
                const id_editorial = document.getElementById('selectEdito')
                const id_idioma = document.getElementById('selectIdioma')
                const estado = document.getElementById('selectEstado')
                

                console.log("Entra primero");
                               
                this.setState({
                  tipoModal: 'actualizar',
                  form: {
                    id_libro: libro.id_libro,
                    nombre: libro.nombre,
                    isbn: libro.isbn,
                    presentacion: libro.presentacion,
                    numero_paginas: libro.numero_paginas,
                    numero_capitulos: libro.numero_capitulos,
                    edicion: libro.edicion,
                    descripcion: libro.descripcion,
                    anexos: libro.anexos,
                    palabras_clave: libro.palabras_clave,
                    cant_ejemplares : libro.cant_ejemplares,
                    categorias: [1],
                    autores: [1, 2],
                    id_editorial: Number(id_editorial.value),
                    id_idioma: Number(id_idioma.value),
                    estado: estado.value
                    //Buscar como se cargaron las categorias en la tabla e implementar ese mismo metodo en este lugar
                  }
                })
              }

              /*Metodo con el cual los datos se van llenado
              desde lo que valla llenando el usuario en el formulario de libros*/

              handleChange=async e=>{
                const id_editorial = document.getElementById('selectEdito')
                const id_idioma = document.getElementById('selectIdioma')
                const estado = document.getElementById('selectEstado')            
                e.persist();
                await this.setState({
                  form:{
                    ...this.state.form,
                    [e.target.name]: e.target.value,
                    categorias: this.llenoCate,
                    autores: this.llenoAuto,
                    id_editorial: Number(id_editorial.value),
                    id_idioma: Number(id_idioma.value),
                    estado: estado.value
                  }
                });
                console.log(this.state.form);
                }

    /* Con esta duncion se realica el procedimiento con el cual
    se muesta la alarma de eliminado */


    eliminacion = () =>{
        Swal.fire({
            title: '¿Esta seguro de eliminar el libro?',
            icon: 'warning',
            confirmButtonText: 'Si, Eliminar',
            showCancelButton: true,
            cancelButtonText: 'No, cancelar',
            reverseButtons: true
        }).then((resultado) => {
            if (resultado.isConfirmed) {
            this.peticionDelete()
            Swal.fire(
                'Eliminado',
                'Libro eliminado correctamente',
                'success'
            )
            }else{
            this.setState({modalEliminar: false})
            }
        })
        }

vaciarSelect = () => {
  const idioma = document.getElementById('selectIdioma')
  idioma.value = ""

  const editorial = document.getElementById('selectEdito')
  editorial.value = ""

  const estado = document.getElementById('selectEstado')   
  estado.value = ""

  const autores = document.getElementById('selecAuto')   
  autores.value = ""
  
  const categorias = document.getElementById('selecCate')   
  categorias.value = ""

  const inputCate = document.getElementById('inputCate')
  inputCate.value = ""
  
  const inputAuto = document.getElementById('inputAuto')
  inputAuto.value = ""
}

        /*Funcion para cerrar la ventana emergente del formulario */
  cerrarForm = () =>{
    this.vaciarSelect();

    this.handleChange()
    this.setState({modalInsertar: !this.state.modalInsertar});
    const cerrar = true
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if(cerrar === true){
      console.log(cerrar)
      overlay.style.visibility = "hidden"
      from_tablas.style.transform="scale(0.6)"
      
      from_tablas.style.opacity="0"
    }
  }

/* Funcion con la cual se renderisa la ventana flotante */
  abrirForm = () => {
      console.log("Entra despues");
      
      console.log(this.state);

      /* if(this.state.tipoModal === "insertar"){
        const tituloForm = document.querySelector('.tituloFormularioLibro')
        tituloForm.textContent = "Nuevo Libro" 
      } */

        this.llenoAuto = []
        this.llenoInputAuto = []
        this.llenoCate = []
        this.llenoInputCate = []

        this.setState({modalInsertar: !this.state.modalInsertar});
        const abrir = false
        const overlay = document.getElementById('overlay')
        const from_tablas = document.querySelector('.from-tablas')

        if(abrir === false){
        from_tablas.style.transition = "all .7s ease"
        overlay.style.visibility = "visible"
        from_tablas.style.transform="scale(1)"
        from_tablas.style.opacity="2"
        }
    }


    render(){

    }
}
