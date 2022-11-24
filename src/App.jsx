//here using the useEffect concept becuase jitne baar render hoga utni baar trigger hoga yahan par
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
//using cat api here 

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState('');   

  function inc(){
    setCount((c)=>c+1)
  }

  useEffect(() => {
  axios.get('https://catfact.ninja/fact')
  .then(function (response) {
    setData(JSON.stringify(response.data.fact));
    console.log(data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    //Runs only on the first render
},[count]);

  return (
    <div className="App">
    <h1>{data} </h1>

    <button onClick={inc}>change Quote</button>
  
    </div>
  )
}

export default App
