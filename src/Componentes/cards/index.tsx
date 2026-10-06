import { useNavigate } from "react-router-dom";

function Card() {
    const navegador = useNavigate();

    return(
        <div className="card">
            
            <div className="card-image-container">
                <img className="card-image" src="https://agenciapnz.com/wp-content/uploads/Logo-Google-G.png" alt="Image" />
            </div>

            <div className="card-content">
                <h3>Mangá Homem Aranha</h3>
                <p>Ano publicação: <b>2023</b></p>  
                <p>Autor: <b>Mauricio de Souza</b></p>  
                <p>Revisão: <b>4</b></p>  
                <p>ISBN: <b>5664682</b></p>   
                <br/>               
                <button className="card-button" onClick={() => navegador('/detalhe-livro')}>Ver mais</button>
            </div>    
            

            
        </div>
    )
}

export default Card;