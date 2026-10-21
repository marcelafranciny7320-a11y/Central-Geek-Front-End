import usuario from "../../assets/usuario.png"

import { Link } from 'react-router-dom'

import logo from "../../assets/logo.png"

import carrinho from "../../assets/carrinho.png"

function Cabecalho() {
    return (
        <div className="Cab-principal">
            
            <header>

                <div className="home-pesquisa">

                    <Link to="/" className="home-logo">
                        <img className="logo" src={logo} alt="página de localizacao" />
                    </Link>

                    <div className="home-pesquisa-input">
                        <input className="home-pesquisa-input-campo" type="text" placeholder="Pesquisar..." />
                        <button className="home-pesquisa-input-botao">Pesquisar</button>
                    </div>

                    <div className= "home-botoes">

                        <Link to="/Login">
                            <img className="imgusuario" src={usuario} alt="página do usuario" />
                        </Link>

                        <div>
                            <img className="carrinho" src={carrinho} />
                        </div>

                    </div>

                </div>

            </header>
        </div>
    )
}

export default Cabecalho

