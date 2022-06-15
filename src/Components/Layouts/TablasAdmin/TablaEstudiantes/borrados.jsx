<div className='Estudiantes-from' >
    <div className="from-Titulo">
    <div className="Desactivar-From">
        <NavLink to='/TEstudiantes' >
        <i class="fa-solid fa-xmark"></i>
        </NavLink>
    </div>
    <h1>NUEVO ESTUDIANTE</h1>                
    </div>              
    <form>
    <div className='boxs-inputs'>
        <div className="box-input">
        <input type="text"  required/>
        <span></span>
        <label>Nombres</label>
        </div>

        <div className="box-input">
        <input type="text"  required/>
        <span></span>
        <label>Apellidos</label>
        </div>

    </div>
    
    <div className="boxs-inputs">
        <div className="box-input">
        <input type="text"  required/>
        <span></span>
        <label>Celular</label>
        </div> 

        <div className="box-input">
        <input type="text"  required/>
        <span></span>
        <label>Dirección</label>
        </div>
    </div>
    <div className="boxs-inputs">
        <div className="box-input">
        <input type="text" required/>
        <span></span>
        <label>Nombre de Usuario</label>
        </div>
        <div className="box-input">
        <input type="text" onChange={handleChange} id='email' required/>
        <span></span>
        <label>Gmail</label>
        </div>
    </div>

    <div className="boxs-inputs">
    <div class="file-select" id="src-file1" >
        <input 
        type="file" name="imagen_libro" onChange= {(e)=>{
        mostrarArchivo(e)
        setearImagen(e)
        }} />
        <h5 className='nomImg'></h5>
    </div>   
    </div>
    <br />
    <div className="btnsFormulario">
        <button className="btnFor btn-agregar">NUEVO ESTUDIANTE</button>
    </div>   
    </form>
</div>