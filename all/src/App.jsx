
import './App.css';
import { useState } from 'react';

function App() {
const [counter, setCounter]=useState(0)


const [isSignedin, setIsSignedin] = useState(false);

 
  return (
    <div className="App">

      <h1>{counter}</h1>
      <button
       onClick={()=>{
        setCounter(counter+1)}}>Increment</button>
      <button 
      onClick={()=>{
        setCounter(counter-1)}}>Decrement</button>

{/* sercounter re rendee the dom */}




<div>
<input value={isSignedin} onChange={(e)=>{
  setIsSignedin(e.target.checked)
}} type="checkbox" id="" />

{isSignedin === true ? <h1>hey! I am signed in</h1>:null}

</div>






     
    </div>
  );
}

export default App;
