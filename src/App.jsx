
import { useRef, useState } from 'react'
import './App.css'

function App() {
   
   const [name,setName]=useState("Yoshita")

    const refEle=useRef();

    const handleReset=()=>{
      setName("")
      refEle.current.focus();

    }

     const handleChange=()=>{
       refEle.current.style.color="red"
     }
  return (
    <div> 

      <div className='container'>

        <div>
          <h1>This is UseRef hook Learning</h1>
        </div>
        <div className='box'>
          <input
          type='text'
          ref={refEle}
           placeholder='enter text'
           value={name}
           onChange={(e)=>setName(e.target.value)}
          />
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleChange}>ChangeColor</button>

        </div>

      </div>



    </div>
  )
}

export default App
