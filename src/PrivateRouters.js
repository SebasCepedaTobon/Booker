import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthUser } from './AuthUser'

const currentUser = AuthUser()
const rolUser = localStorage.getItem('tipo_usuario')

export function PrivateRoute() {
  return currentUser ? <Outlet /> : <Navigate to='/' />
}

export function PrivateHome() {
  return  rolUser === 'E' ? <Navigate to='/Home' /> : <Outlet />
}

export function PrivateAdmin() {
  return  rolUser === 'B' ? <Navigate to='/Admin' /> : <Outlet />
}


export function PrivateAdminRoute() {
  return rolUser === 'B' ? <Outlet /> : <Navigate to='/Home' />
}

export function PrivateProfileAdmin() {
  return rolUser === 'B' ? <Outlet /> : <Navigate to='/Home' />
}

export function PrivateProfileRoute() {
  return rolUser === 'E' ? <Outlet /> : <Navigate to='/' />
}