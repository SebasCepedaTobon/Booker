import React from 'react'
import { SpinnerDotted } from 'spinners-react';

export const Spinner = () => {
  return (
    <div className='spinner'>
        <SpinnerDotted size={100} thickness={100} speed={100} color="rgb(37,145,218)" secondaryColor="" />
    </div>
  )
}
