import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthUser } from '../login/AuthUser'

const currentUser = AuthUser()
const rolUser = localStorage.getItem('rolUser')

export function PrivateRoute() {
  return currentUser && rolUser === 'Cliente' ? <Outlet /> : <Navigate to='/' />
}

export function PrivateLogin() {
  return rolUser === 'Cliente' || rolUser === 'Admin' ? <Navigate to='/' /> : <Outlet />
}

export function PrivateAdminRoute() {
  return rolUser === 'Admin' ? <Outlet /> : <Navigate to='/' />
}

export function PrivateProfileRoute() {
  return rolUser === 'Cliente' || rolUser === 'Admin' ? <Outlet /> : <Navigate to='/' /> 
}