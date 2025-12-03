import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [personaggi, setpersonaggi] = useState([]);

useEffect(() =>{
  listActors()
}, [])

  function listActors() {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((list) => {
      setpersonaggi(list.data)
    })
  }
listActors()
  return (
    <section>
    <h1>Lista di atrici</h1>
    
    <div>
      {personaggi.map((personaggio, )=>
      <div key={personaggio.id}>
        <h2>{personaggio.name}</h2>
        <img src={personaggio.image} alt="" />
        <p>{personaggio.birth_year}         {personaggio.nationality}</p>
        <p>{personaggio.biography}</p>
        <p>Known For:{personaggio.most_famous_movies}</p>
        <p>Awards:{personaggio.awards}</p>

      </div>

      
      )}

    </div>


    </section>
  )
}

export default App
