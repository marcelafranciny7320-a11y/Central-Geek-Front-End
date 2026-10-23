
import { useNavigate } from "react-router-dom";
import "../Estilo/estilo.css";

function Manga() {

    const navigate = useNavigate();

    function handleComprar() {
        alert("A funcionalidade de compra será implementada em breve!");
    }

    function handleTrocar() {
        alert("A funcionalidade de troca será implementada em breve!");
    }

    return (
        <div className="pagina-manga">

            <button
                className="btn-voltar-manga"
                onClick={() => navigate(-1)}
            >
                Voltar
            </button>

            <div className="manga-container">

                <div className="manga-capa">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZetok3bfNKYK5WEkrxj05ILhVzT6Z63FfdaV1FB0Mg&s=10"
                        alt="Capa do mangá Tomie"
                    />
                </div>

                <div className="manga-informacoes">

                    <h1>Tomie</h1>

                    <p className="manga-autor">
                        Por Junji Ito
                    </p>

                    <p className="manga-genero">
                        Terror • Suspense
                    </p>

                    <h2 className="manga-preco">
                        R$ 92,99
                    </h2>

                    <p className="manga-estoque">
                        Disponível para compra
                    </p>

                    <div className="manga-botoes">

                        <button
                            className="btn-comprar-manga"
                            onClick={handleComprar}
                        >
                            Comprar agora
                        </button>

                        <button
                            className="btn-trocar-manga"
                            onClick={handleTrocar}
                        >
                            Tenho interesse em trocar
                        </button>

                    </div>

                </div>

                <div className="manga-detalhes">

                    <h2>Detalhes da obra</h2>

                    <div className="manga-detalhes-lista">

                        <p>
                            <span>Nome da obra:</span>
                            Tomie
                        </p>

                        <p>
                            <span>Autor:</span>
                            Junji Ito
                        </p>

                        <p>
                            <span>Ano de publicação:</span>
                            1987
                        </p>

                        <p>
                            <span>Volume:</span>
                            1
                        </p>

                        <p>
                            <span>ISBN:</span>
                            978-6586672374
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Manga;