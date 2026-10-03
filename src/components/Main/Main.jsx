import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css'; // Importa o arquivo CSS responsável pela estilização do Main.

function Main() {
  const [info, setInfo] = useState([]);
  const [busca, setBusca] = useState('');

  const pegarDados = async () => {
    const dados = await axios.get(
      'https://dummyjson.com/products/category/womens-dresses'
    );

    setInfo(dados.data.products);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  // Filtra os produtos de acordo com o texto digitado
  const produtosFiltrados = info.filter((item) =>
    item.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <section>
        <input
          type="text"
          placeholder="Digite o nome da roupa..."
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />

        <button type="button">
          Buscar
        </button>
      </section>

      <section>
        {produtosFiltrados.map((item) => (
          <article key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <h2>{item.title}</h2>

            <p>R$ {item.price.toFixed(2)}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Main;