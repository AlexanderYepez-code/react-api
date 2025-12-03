import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  function listActors(){
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((list)=>{
      console.log(resp)
    })
  }
  // return (
    
  // )
}

export default App
