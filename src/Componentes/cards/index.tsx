import { useNavigate } from "react-router-dom";

function Card() {
    const navegador = useNavigate();

    return(
        <div className="card">
            
            <div className="card-image-container">
                <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILdGCwMoJH3go-x7jQTh4JOQjLDlxgskT9uzNWuLcDA&s=10" alt="Image" />
            </div>

            <div className="card-content">
                <h3>Tomie</h3>
                <p>Ano publicação: <b>1987</b></p>  
                <p>Autor: <b>Junji Ito</b></p>  
                <p>Revisão: <b>8</b></p>  
                <p>ISBN: <b>978-6586672374</b></p>   
                <br/>               
                <button className="card-button" onClick={() => navegador('/detalheManga')}>Ver mais</button>
            </div>    
            

            
        </div>
    )
}

export default Card;