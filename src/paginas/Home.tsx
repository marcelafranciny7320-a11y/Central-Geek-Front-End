import { useState } from 'react';
import Card from '../Componentes/cards';
import '../Estilo/estilo.css'
import type { tpCards } from '../types/cards';


function Home() {

    const [Cards, setCard] = useState<tpCards[]>([]);

    const carregarCardsAsync = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let json = await response.json();

        const ConjuntoDados = Array.isArray(json) ? json : [json]

        setCard(ConjuntoDados);
    }
    return (
        <>
            <div className="menu1">

                <button onClick={carregarCardsAsync}>carregar</button>


                <div className="home-cards">
                    {Cards.map((item, index) =>(
                        <div key ={index}>
                        <Card/>
                        {item.id}
                        </div>
                    ))}          
                </div>
            </div>
            {/* <h1>Bem vindo a Home!</h1> */}
        </>
    )
}

export default Home;
