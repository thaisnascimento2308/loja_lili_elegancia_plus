import {useState, useEffect} from 'react'
import axios from 'axios'
import React from 'react';
import './Main.css';

function Main() {
  const [info, setInfo] = useState([])

  const pegarDados = async () => {
    const dados =  await axios.get('https://fakestoreapi.com/products')
    setInfo(dados.data)
  }

  useEffect(() => {
    pegarDados()
  }, []);

  return (
  <main>
    <h1>Lili Elêgancia Plus</h1>

    {
      info.map((item) => (
        <article key={item.id}>
          <img src={item.image} alt={item.title}/>
          <h2>{item.title}</h2>
          <p> R$ {item.price.toFixed(2)}</p>
        </article>
      ))
    }
  </main>
  )
}

export default Main;