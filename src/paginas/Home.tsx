import Card from '../Componentes/cards';
import '../Estilo/estilo.css'


function Home() {
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


            
        </>
    )
}

export default Home;
