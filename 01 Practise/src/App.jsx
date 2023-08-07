import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  let date = "07-08-2023"
  let product = {
    name : "Apple Iphone 12" ,
    price : 60000 ,
    GB : "128GB" ,
    colour : "White" ,
    camera : "12-MP"
  }
  
  return (

      <>
      <h2>{product.name}</h2>
      <img width={300} src="https://images.hindustantimes.com/tech/htmobile4/P34241/images/Design/136139-v4-apple-iphone-12-mobile-phone-large-3.jpg" alt="" />
      
      <p>Price of Iphone 12 :-  {product.price}</p>
      <p>Storage of Iphone 12:- {product.GB}</p>
      <p>Camera of Iphone 12 :- {product.camera}</p>
      
      </>
    
  )
}

export default App
