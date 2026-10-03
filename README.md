# 👗 Lili Elegancia Plus

Uma aplicação web desenvolvida em **React.js + Vite** para simular um e-commerce fictício de roupas plus size.

O projeto foi desenvolvido como parte do **🚀 Desafio 02: Painel Interativo com API Pública**, com foco no consumo de uma API REST, manipulação de dados, componentização, responsividade e interação com o usuário.

---

## 📖 O que é?

O **Lili Elegancia Plus** é um projeto educacional criado para praticar conceitos fundamentais do desenvolvimento Front-End com **React.js**, utilizando dados reais fornecidos por uma API pública.

A aplicação utiliza a **Fake Store API** para buscar informações de produtos e apresentá-las de maneira organizada através de cards.

Além da visualização dos produtos, o usuário pode utilizar o campo de **busca** para encontrar produtos pelo nome.

O projeto permite praticar:

* 🔌 Consumo de API REST;
* ⚛️ Componentes funcionais no React;
* 🪝 `useState`;
* 🪝 `useEffect`;
* 📡 Axios;
* 🔎 Filtragem de dados;
* 🔄 Renderização dinâmica com `.map()`;
* 📱 Responsividade;
* ♿ Acessibilidade;
* 🎨 Organização de CSS;
* 🧩 Componentização.
---

## 💡 Problemática

Atualmente, muitas informações estão disponíveis através de APIs públicas, porém os dados retornados precisam ser organizados para que possam ser apresentados de maneira simples e compreensível para o usuário.

A proposta deste projeto é transformar os dados disponibilizados por uma API pública em uma interface visual organizada, permitindo que o usuário consulte e pesquise produtos de maneira simples.
---

## 🎯 Objetivo

Desenvolver uma aplicação React funcional e responsiva capaz de:

* Consumir uma API pública;
* Apresentar os dados recebidos de forma organizada;
* Utilizar estados do React;
* Criar componentes com responsabilidades claras;
* Permitir interação com os dados;
* Criar uma interface responsiva;
* Praticar o consumo de uma API REST;
* Documentar o desenvolvimento do projeto.
---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Front-End

* ⚛️ React.js
* ⚡ Vite
* 🟨 JavaScript (ES6+)
* 🌐 HTML5
* 🎨 CSS3
* 📡 Axios

### API

* 🛒 Fake Store API

Endpoint utilizado:

https://fakestoreapi.com/products

### Conceitos Aplicados

* 📦 Componentização
* 🪝 `useState`
* 🪝 `useEffect`
* 🔌 Consumo de API REST
* 🔎 `filter()`
* 🔄 `map()`
* 📱 Responsividade
* ♿ Acessibilidade
* 🎨 CSS Grid
* 🏗️ HTML semântico

### Ferramentas

* 💻 Visual Studio Code
* 🐙 Git
* 🌍 GitHub
* 🚀 Vite
---

## ▶️ Como Executar o Projeto

### Pré-requisitos

Antes de iniciar, você precisa ter instalado:

* Node.js
* Git

Verifique as versões:

node -v

git --version
---

### 1. Clonar o repositório
git clone URL_DO_REPOSITORIO

> Substitua `https://github.com/thaisnascimento2308/Bootcamp_Desenvolvedor_de_Solucoes_Digitais/tree/main/Terceiro_Projeto/meu-projeto` pelo endereço do repositório no GitHub.
---

### 2. Entrar na pasta do projeto
cd meu-projeto
---

### 3. Instalar as dependências
npm install
---

### 4. Instalar o Axios
npm install axios
---

### 5. Executar o projeto
bash
npm run dev

---

### 6. Abrir no navegador
Normalmente o projeto será executado em:

http://localhost:5173

O endereço exato será informado pelo Vite no terminal.
---

## ⚙️ Como Funciona?

A aplicação utiliza a arquitetura baseada em componentes do React.

O componente `Main` é responsável pelo consumo da API e pela apresentação dos produtos.

O fluxo principal da aplicação funciona da seguinte maneira:

Fake Store API
      ↓
     Axios
      ↓
   useEffect
      ↓
   response.data
      ↓
   setProducts()
      ↓
    useState
      ↓
      map()
      ↓
Cards de produtos

O usuário também pode realizar uma busca:

Usuário digita
      ↓
   useState
      ↓
    filter()
      ↓
Produtos filtrados
      ↓
Cards atualizados
---

## 📂 Estrutura do Projeto

src/
│
├── components/
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── Main/
│   │   ├── Main.jsx
│   │   └── Main.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── App.jsx
├── App.css
├── main.jsx
└── style.css

---

## 🧩 Componentes

### 🧩 Header

Responsável por:

* Exibir o nome da aplicação;
* Apresentar uma breve mensagem relacionada à proposta da loja.

Tecnologias utilizadas:

* HTML semântico;
* CSS;
* Responsividade.
---

### 🧩 Main

É o principal componente da aplicação.

Responsável por:

* Consumir a Fake Store API;
* Armazenar os produtos utilizando `useState`;
* Realizar a requisição através do Axios;
* Utilizar `useEffect` para realizar a requisição quando o componente é montado;
* Criar a busca de produtos;
* Filtrar os produtos utilizando `filter()`;
* Renderizar os produtos utilizando `map()`;
* Exibir os cards dos produtos.

Cada card apresenta:

* 🖼️ Imagem;
* 📝 Título;
* 💰 Preço.


### 🧩 Footer

Responsável por:

* Exibir os direitos reservados;
* Finalizar visualmente a aplicação.

Tecnologias utilizadas:

* HTML semântico;
* CSS;
* Responsividade.
---

## 🔌 Consumo da API

A aplicação utiliza o **Axios** para realizar uma requisição HTTP GET:

javascript
const response = await axios.get(
  'https://fakestoreapi.com/products'
);

Após a resposta da API, os dados são armazenados no estado:

setInfo(dados.data);

Dessa forma, os produtos recebidos ficam disponíveis para serem apresentados na interface.
---

## 🎨 Organização do CSS

O projeto utiliza CSS separado por componente:

Header.css
Main.css
Footer.css

Essa organização facilita:

* ✅ Manutenção;
* ✅ Organização;
* ✅ Leitura do código;
* ✅ Separação de responsabilidades;
* ✅ Evolução do projeto.

Os estilos globais ficam separados dos estilos específicos dos componentes.
---

## 📱 Responsividade

O projeto foi desenvolvido para funcionar adequadamente em diferentes tamanhos de tela:

* 📱 Smartphones;
  -- 📲 Tablets;
* 💻 Desktops.

O layout dos produtos utiliza **CSS Grid**.

Em telas maiores, os produtos são apresentados em múltiplas colunas.

Em telas menores, a quantidade de colunas é reduzida para facilitar a visualização.

No smartphone, os produtos são apresentados em uma única coluna.
---

## ♿ Acessibilidade

Foram aplicadas boas práticas de acessibilidade, incluindo:

* HTML semântico;
* `alt` descritivo nas imagens;
* Uso do título do produto fornecido pela API no `alt`;
* `label` associado ao campo de busca;
* Foco visível no campo de pesquisa;
* Elementos com tamanho adequado para interação.

## 🌎 Onde Posso Acessar?

### 💻 Projeto local

http://localhost:5173

### 🚀 Vercel

Link da aplicação publicada:

https://lojalilieleganciaplus-iknomgsjl-thais-nascimento.vercel.app/
---

## 💻 Repositório

### GitHub

Repositório do projeto:
https://github.com/thaisnascimento2308/loja_lili_elegancia_plus

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Ela foi utilizada para:

* pesquisar e compreender conceitos;
* auxiliar na organização dos componentes;
* compreender o consumo da API;
* identificar e corrigir erros;
* auxiliar na implementação da busca;
* melhorar a organização do código;
* auxiliar na responsividade;
* melhorar a documentação do projeto.

A IA foi utilizada como apoio ao desenvolvimento, sendo necessário compreender o funcionamento do código e das decisões utilizadas na aplicação.

### ### 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento do projeto, utilizei Inteligência Artificial como ferramenta de apoio para compreender conceitos, estruturar o código, identificar erros e melhorar a organização do projeto.

#### Prompt utilizado

> Estou desenvolvendo o **Desafio 02 – Painel Interativo com API Pública usando React + Vite** da Kodie Academy.
>
> Quero desenvolver uma aplicação chamada **Lili Elegância Plus**, uma página de produtos inspirada em uma loja de roupas e acessórios.
>
> O projeto deve utilizar:
>
> * React.js;
> * Vite;
> * JavaScript;
> * HTML semântico;
> * CSS separado dos arquivos JSX;
> * Axios para realizar a requisição HTTP;
> * uma API pública de produtos;
> * `useState` para armazenar os dados recebidos da API;
> * `useEffect` para realizar a requisição quando o componente for carregado;
> * `map()` para percorrer e renderizar os produtos;
> * `filter()` para implementar uma interação de busca/filtro;
> * CSS Grid e Flexbox para organizar os produtos;
> * layout responsivo para desktop, tablet e celular.
>
> A aplicação deve possuir os componentes:
>
> * `Header.jsx` e `Header.css`;
> * `Main.jsx` e `Main.css`;
> * `Footer.jsx` e `Footer.css`.
>
> O `Header` deve apresentar o nome **Lili Elegância Plus**.
>
> O `Main` deve realizar a requisição para a API, armazenar os produtos no estado e apresentar cada produto em um card contendo:
>
> * imagem;
> * texto alternativo na imagem;
> * nome do produto;
> * preço formatado em reais;
> * categoria, quando disponível.
>
> A aplicação também deve possuir uma interação que permita ao usuário pesquisar ou filtrar produtos.
>
> O código deve ser simples, organizado e adequado para uma pessoa que está aprendendo React. Explique os principais conceitos utilizados, principalmente `useState`, `useEffect`, Axios, `map()` e `filter()`.
>
> Não utilize bibliotecas desnecessárias ou soluções avançadas. Mantenha a estrutura do projeto fácil de compreender e com comentários explicativos no código.
>
> Também preciso de um CSS responsivo, utilizando Grid/Flexbox, com cards organizados, imagens sem distorção, boa hierarquia visual, espaçamento adequado e adaptação para telas menores.
>
> Caso exista algum erro no código, explique primeiro a causa do erro e depois apresente a correção, para que eu consiga entender o que foi alterado.
>
> Ao final, ajude a estruturar um README contendo:
>
> 1. nome do projeto;
> 2. descrição;
> 3. problema;
> 4. objetivo;
> 5. tecnologias utilizadas;
> 6. API utilizada;
> 7. funcionalidades;
> 8. estrutura dos componentes;
> 9. como executar o projeto;
> 10. como funciona a integração com a API;
> 11. responsividade;
> 12. acessibilidade;
> 13. uso de Inteligência Artificial;
> 14. link do GitHub;
> 15. link da aplicação publicada.
>
> Quero que as soluções sejam explicadas de forma didática, com linguagem simples e sem gerar código desnecessariamente complexo.

---

## 📚 Objetivo Acadêmico

Este projeto foi desenvolvido com fins educacionais para praticar:

* React.js;
* Vite;
* Componentes funcionais;
* `useState`;
* `useEffect`;
* Axios;
* Consumo de API REST;
* `map()`;
* `filter()`;
* JavaScript;
* CSS moderno;
* CSS Grid;
* Responsividade;
* Acessibilidade;
* Organização de projetos Front-End.
---

## 👩‍💻 Quem Desenvolveu?

### Thais do Nascimento

Estudante de Engenharia de Software e desenvolvedora Front-End em formação.

🔗 GitHub:

https://github.com/thaisnascimento2308

🔗 LinkedIn:

https://linkedin.com/in/thais-nascimento-dev/
---

⭐ Projeto desenvolvido para fins educacionais como parte do **Desafio 02 — Painel Interativo com API Pública**.