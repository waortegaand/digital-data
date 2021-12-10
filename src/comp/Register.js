import React from 'react';
import Header from './Header';

function Register(){
  return(
  <div >
    <Header/>
    <form className="col-md-6 justify-content-center">
  	  <div className="form-row">
        <div className="form-group col-md-6">
		  <label for="inputAddress">Nombre</label>
		  <input type="text" className="form-control" id="inputAddress" placeholder="Nombre"/>
	    </div>
	    <div className="form-group col-md-6">
		  <label for="inputAddress2">Apellido</label>
		  <input type="text" className="form-control" id="inputAddress2" placeholder="Apellido"/>
	    </div>
		<div className="form-group col-md-6">
		  <label for="inputCity">Identificacion</label>
		  <input type="text" className="form-control" id="inputCity"/>
		</div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Correo Electronico</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="example@email.com"/>
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Contrasena</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
      </div>

	  <div className="form-row">
		<div className="form-group col-md-4">
		  <label for="inputState">Rol</label>
		  <select id="inputState" className="form-control">
		    <option selected>Estudiante</option>
		    <option>Lider</option>
		    <option>Administrador</option>
		  </select>
		</div>
	  </div>
  	  <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  </div>
  )
}

export default Register;
