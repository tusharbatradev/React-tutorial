import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mobile from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>


    <Mobile img="https://media.croma.com/image/upload/v1664009258/Croma%20Assets/Communication/Mobiles/Images/243459_0_ljp1lm.png" name="Iphone13" price = "70000/-" camera="16MP" GB="256GB"/>

    <Mobile img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdCFxMxjksKIx53C7FHoz1dJWva-wy8Rr5IZZIL9pCa7rw5tyxSrQIC2ldyDQ8HdYNgQ&usqp=CAU" name="Iphone12" price = "60000/-" camera="16MP" GB="128GB"/>


    <Mobile img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaIDklkydtK2gCusAOpif3g5k9IXq1bSE8WDxrWUqS7fnMY4fLmKEtZBPgLkE4XYP6EykN8tx6icvSabnypj-nfmSwblJWQ3w35EEeXcNehshIAIw9qPtr&usqp=CAE" name="Iphone11" price = "50000/-" camera="12MP" GB="128GB"/>


    <Mobile img="https://media.mobex.in/media/catalog/product/a/p/apple_iphone_x_space_gray_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover" name="Iphone X" price = "45000/-" camera="8MP" GB="64GB" />
    </div>

  </React.StrictMode>,
)
