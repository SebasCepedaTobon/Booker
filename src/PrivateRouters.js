import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthUser } from './AuthUser'

const currentUser = AuthUser()
const rolUser = localStorage.getItem('tipo_usuario')

export function PrivateRoute() {
  return currentUser ? <Outlet /> : <Navigate to='/' />
}

export function PrivateAdmin() {
  return  rolUser === 'B' ? <Navigate to='/Admin' /> : <Outlet />
}


export function PrivateSuperAdmin() {
  return  rolUser === 'A' ?  <Navigate to='/TBibliotecarios' /> :<Outlet /> 
}


export function PrivateSuperAdminRoute() {
  return  rolUser === 'A' ? <Outlet /> : <Navigate to='/' />
}


export function PrivateAdminRoute() {
  return rolUser === 'B' ? <Outlet /> : <Navigate to='/' />
}


export function PrivateProfileRoute() {
  return rolUser === 'E' ? <Outlet /> : <Navigate to='/' />
} 

