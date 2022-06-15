export const Logout = () => {
  localStorage.clear()
  sessionStorage.clear()
  window.location.reload()
}
