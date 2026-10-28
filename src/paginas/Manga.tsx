
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listarMangas } from "../api";
import type { tpCards } from "../types/cards";
import "../Estilo/estilo.css";

function Manga() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [manga, setManga] = useState<tpCards | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");
    const [verMais, setVerMais] = useState(false);

    useEffect(() => {
        async function carregarManga() {
            try {
                setCarregando(true);
                setErro("");

                const mangas = await listarMangas();
                const mangaEncontrado = mangas.find(
                    (item) => item.id === id
                );

                if (!mangaEncontrado) {
                    setErro("Mangá não encontrado.");
                    return;
                }

                setManga(mangaEncontrado);
            } catch (error) {
                setErro(
                    error instanceof Error
                        ? error.message
                        : "Erro ao carregar os dados do mangá."
                );
            } finally {
                setCarregando(false);
            }
        }

        carregarManga();
    }, [id]);

    function handleContato() {
        alert(
            "Em breve você poderá entrar em contato diretamente com o proprietário."
        );
    }

    if (carregando) {
        return (
            <div className="pagina-manga">
                <p>Carregando informações do mangá...</p>
            </div>
        );
    }

    if (erro || !manga) {
        return (
            <div className="pagina-manga">
                <button
                    className="btn-voltar-manga"
                    onClick={() => navigate(-1)}
                >
                    Voltar
                </button>

                <p role="alert">{erro || "Mangá não encontrado."}</p>
            </div>
        );
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
                        src={manga.coverImageUrl}
                        alt={`Capa do mangá ${manga.title}`}
                    />
                </div>

                <div className="manga-informacoes">
                    <h1>{manga.title}</h1>

                    <p className="manga-autor">
                        Por {manga.author}
                    </p>

                    <p className="manga-genero">
                        Gênero: {manga.genre}
                    </p>

                    <div className="manga-detalhes-lista">
                        <p>
                            <span>Volume:</span> {manga.volumeNumber}
                        </p>

                        <p>
                            <span>Editora:</span> {manga.publisher}
                        </p>

                        <p>
                            <span>ISBN:</span> {manga.isbn}
                        </p>

                        <p>
                            <span>Condição:</span> {manga.condition}
                        </p>
                    </div>

                    <div className="manga-botoes">
                        <button
                            className="btn-comprar-manga"
                            onClick={handleContato}
                        >
                            Entrar em contato com o proprietário
                        </button>
                    </div>
                </div>

                <div className="manga-detalhes">
                    <h2>Detalhes da obra</h2>

                    <div className="manga-detalhes-lista">
                        <p>
                            <span>Nome da obra:</span> {manga.title}
                        </p>

                        <p>
                            <span>Autor:</span> {manga.author}
                        </p>

                        <p>
                            <span>Volume:</span> {manga.volumeNumber}
                        </p>

                        <p>
                            <span>Editora:</span> {manga.publisher}
                        </p>

                        <p>
                            <span>ISBN:</span> {manga.isbn}
                        </p>

                        <p>
                            <span>Condição:</span> {manga.condition}
                        </p>

                        {verMais && (
                            <>
                                <p>
                                    <span>Gênero:</span> {manga.genre}
                                </p>

                                <p>
                                    <span>Sinopse:</span>{" "}
                                    {manga.synopsis || "Sem sinopse cadastrada."}
                                </p>

                                <p>
                                    <span>Observações:</span>{" "}
                                    {manga.notes || "Nenhuma observação cadastrada."}
                                </p>

                                <p>
                                    <span>Cadastrado em:</span>{" "}
                                    {manga.createdAt
                                        ? new Date(manga.createdAt).toLocaleDateString("pt-BR")
                                        : "Não informado"}
                                </p>
                            </>
                        )}
                    </div>

                    <button
                        className="card-button"
                        onClick={() => setVerMais(!verMais)}
                    >
                        {verMais ? "Ver menos" : "Ver mais detalhes"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Manga;