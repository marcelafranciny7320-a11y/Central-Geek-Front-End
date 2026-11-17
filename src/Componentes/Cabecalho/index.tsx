import { useContext } from "react";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import usuario from "../../assets/usuario.png";
import { Link, useSearchParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import carrinho from "../../assets/carrinho.png";

function Cabecalho() {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
    const login = useContext(UsuarioLogadoContext);


    const [searchParams, setSearchParams] = useSearchParams();

    const pesquisa = searchParams.get("busca") || "";

    const atualizarPesquisa = (valor: string) => {
        const novosParametros = new URLSearchParams(searchParams);

        if (valor) {
            novosParametros.set("busca", valor);
        } else {
            novosParametros.delete("busca");
        }

        setSearchParams(novosParametros, { replace: true });
    };

    return (
        <div className="Cab-principal">

            <header>

                <div className="home-pesquisa">

                    <Link to="/" className="home-logo">
                        <img className="logo" src={logo} alt="Página inicial" />
                    </Link>

                    <div className="home-pesquisa-input">

                        <input
                            className="home-pesquisa-input-campo"
                            type="text"
                            placeholder="Pesquisar..."
                            value={pesquisa}
                            onChange={(e) => atualizarPesquisa(e.target.value)}
                        />

                    </div>

                    <div className="home-botoes">

                        {login?.id ? (
                            <Link to="/Perfil/editar">
                                <img className="img__usuario" src={login.avatarUrl} alt="página do usuario" />
                            </Link>
                        ) : (
                            <Link to="/Login">
                                <img className="icone__usuario" src={usuario} alt="página do usuario" />
                            </Link>
                        )}

                        <div>
                            <img className="carrinho" src={carrinho} alt="Carrinho" />
                        </div>


                    </div>

                </div>


                {/* <div className="user-area">
                    <Link to="/perfil" className="profile-link">
                        <img
                            src="https://github.com/identicons/user.png"
                            alt="Foto do Perfil"
                            className="avatar-img"
                        />
                        <span>Meu Perfil</span>
                    </Link>

                </div>

                <div className="user-menu-container">
                    <button onClick={toggleMenu} className="avatar-button">
                        <img src="https://github.com/identicons/user.png" alt="Avatar" />
                        <span>Usuario</span>
                    </button>


                    <button onClick={toggleMenu} className="avatar-button"></button>
                    {isMenuOpen && (
                        <nav className="dropdown-menu">
                            <ul>
                                <li>
                                    <Link to="perfil" onClick={() => setIsMenuOpen(false)}>
                                        Ver/Editar Perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link to="meus-anuncios" onClick={() => setIsMenuOpen(false)}>
                                        Meus Mangás
                                    </Link>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <button onClick={() => alert('Sair da conta')}>Sair</button>
                                </li>
                            </ul>
                        </nav>
                    )}

                </div> */}

            </header>

        </div>
    );
}

export default Cabecalho;
