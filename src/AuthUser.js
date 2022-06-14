export const AuthUser = () => {
  const userSession = localStorage.getItem('tipo_usuario')
  let userInSession = userSession != null || '' || undefined ? true : false

  return userInSession
}
