import React, {Component} from 'react'
import axios from 'axios';

const urlAutores="https://bookerbackapi.herokuapp.com/modulos/autores/";
const urlIdioma="https://bookerbackapi.herokuapp.com/modulos/idiomas/";
const urlCate="https://bookerbackapi.herokuapp.com/modulos/categorias/";
const urlEditorial="https://bookerbackapi.herokuapp.com/modulos/editoriales/";

export class ApiCate extends Component {
  
  url="https://bookerbackapi.herokuapp.com/modulos/libros/";
  peticionGet=()=>{

    axios.get(this.url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
    
  }

  categorias = []
  
  cargarCate = () => {
    fetch(urlCate)
    .then(res => res.json())
    .then((cate) =>{
      this.categorias = cate
      console.log(this.categorias);
    })
  }

  autores = []
  
  cargarAutores = () => {
    fetch(urlAutores)
    .then(res => res.json())
    .then((auto) =>{
      this.autores = auto
    })
  }

  idioma = []
  
  cargarIdiomas = () => {
    fetch(urlIdioma)
    .then(res => res.json())
    .then((idio) =>{
      this.idioma = idio
    })
  }

  editorial = []
  
  cargarEdtorial = () => {
    fetch(urlEditorial)
    .then(res => res.json())
    .then((edi) =>{
      this.editorial = edi
    })
  }
  
  render(){
    return this.categorias, this.autores, this.editorial, this.idioma
  }
    
}
