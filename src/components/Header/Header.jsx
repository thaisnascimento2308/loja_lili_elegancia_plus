import React from 'react';
import './Header.css'; // Importa o arquivo CSS responsável pela estilização do Header.

function Header() {
// O Header possui uma única responsabilidade:
// exibir o título principal da aplicação.
    return(
        <header>
            <h1>Lili Elêgancia Plus</h1>
        </header>
    )
}

export default Header;