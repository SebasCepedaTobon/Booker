import React from 'react'

export const abrirNav = () => {


    const abrirNav = () =>{
        console.log("holaaa");
        document.querySelector('.conatiner-nav-tres').classList.toggle('show')
    }
  return (
    <div className='navegator'>
        <h2>holaaa</h2>
        <button onClick={abrirNav}>holaa</button>
    </div>
  )
}
