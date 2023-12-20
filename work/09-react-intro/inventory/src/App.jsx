import { useState } from 'react';
import './App.css';

import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  let reorder ="null";
  function redoer(reorder)
  {
   
    if(reorder  == "reorder")
    {
      setCount(5);
    }
    return count;
  }

  return (
    <>
      
     
      <div className="card">
       
        <button className = "card__button card__button--plus  card__button--logo" onClick={() => setCount((count) => count + 1)}>
          +
        </button>

        <h1 className = "card__button">
            {count}
        </h1>

        <button className = "card__button card__button--minus card__button--logo" disabled={!count} onClick={() => setCount((count) => count - 1)}>
          - 
        </button>

        <Reorder onReorder ={redoer}/>
        
  
      </div>
  
    </>
  )
}

export default App;
