import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'



function Counter(prop) {
  
  const [count, setCount] = useState(0);
  
  
  return (
    <div className='block'>
   <p className='value'>{count}</p>
      <button onClick={() => setCount((count) => count + 1)} className="button">Increment</button>
      <button onClick={() => setCount((count) => count - 1)} className="button">Decrement</button>
  <button onClick={() => setCount(0)} className="button">Reset</button>
    </div>
  );
}

export default Counter
