import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthUser } from './AuthUser'

const currentUser = AuthUser()
const rolUser = localStorage.getItem('tipo_usuario')

export function PrivateRoute() {
  return currentUser ? <Outlet /> : <Navigate to='/' />
}

/* export function PrivateHome() {
  return  rolUser === 'E' ? <Navigate to='/Home' /> : <Outlet />
}

export function PrivateLogin() {
  return  rolUser === 'E' ? <Navigate to='/Home' /> : <Outlet />
} */



export function PrivateAdmin() {
  return  rolUser === 'B' ? <Navigate to='/Admin' /> : <Outlet />
}



export function PrivateSuperAdmin() {
  return  rolUser === 'A' ?  <Navigate to='/TBibliotecarios' /> :<Outlet /> 
}




export function PrivateSuperAdminRoute() {
  return  rolUser === 'A' ? <Outlet /> : <Navigate to='/TBibliotecarios' />
}

// Esta funcion en el app.js encierra las rutas que SOLO puede navegar el bibliotecario
export function PrivateAdminRoute() {
  return rolUser === 'B' ? <Outlet /> : <Navigate to='/Home' />
}

// Esta funcion en el app.js encierra las rutas que SOLO puede navegar el estudiante
export function PrivateProfileRoute() {
  return rolUser === 'E' ? <Outlet /> : <Navigate to='/Admin' />
}