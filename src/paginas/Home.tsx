import Card from '../Componentes/cards';
import '../Estilo/estilo.css'
import { useNavigate } from "react-router-dom";


function Home() {

     const navigate = useNavigate();

    return (
        <>
            <div className="menu1"></div>

            {/* <h1>Bem vindo a Home!</h1> */}

            <div className="home-pesquisa"> 
                <div className="home-pesquisa-input">
                    <input className="home-pesquisa-input-campo" type="text" placeholder="Pesquisar..." />                    
                    <button className="home-pesquisa-input-botao">Pesquisar</button>
                </div>



            </div>


            <div className="home-cards">

              <Card />
              <Card />
              <Card />



            </div>

            <div className="acoes-container">
                  <button  onClick={() => {navigate("/CadastrarManga"); }} className="btn-adicionar">
                Adicionar
            </button>
            </div>


            
        </>
    )
}

export default Home;
