import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'



function Mobile(prop) {
  
  
  return (

      <div className='block'>
      
      <h2>{prop.name}</h2>
      <img width={200} src= {prop.img} alt="" />
      <p> {prop.price}</p>
      <p>{prop.GB}</p>
      <p>{prop.camera}</p>
      <Button/>

      </div>
  
  )
}

export default Mobile
