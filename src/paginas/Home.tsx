import { useCallback, useContext, useEffect, useState } from "react";
import Card from "../Componentes/cards";
import "../Estilo/estilo.css";
import type { tpCards } from "../types/cards";
import { listarMangas } from "../api";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

function Home() {

    const [Cards, setCard] = useState<tpCards[]>([]);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [consultaConcluida, setConsultaConcluida] = useState(false);

    const navigate = useNavigate();
    const login = useContext(UsuarioLogadoContext);

    const [searchParams] = useSearchParams();

    const pesquisa = searchParams.get("busca") || "";

    const FiltraManga = Cards.filter((item) =>
        item.title.toLowerCase().includes(pesquisa.toLowerCase())
    );

    const carregarCardsAsync = useCallback(async () => {

        try {
            setCarregando(true);
            setErro("");

            const dados = await listarMangas();
            setCard(dados);

        } catch (error) {

            setErro(
                error instanceof Error
                    ? error.message
                    : "Erro ao carregar os mangás."
            );

        } finally {

            setCarregando(false);
            setConsultaConcluida(true);

        }

    }, []);

    useEffect(() => {
        void carregarCardsAsync();
    }, [carregarCardsAsync]);

    return (

        <div className="menu1">
            {/* <button


            <button
                onClick={() => void carregarCardsAsync()}
                disabled={carregando}
            >
                {carregando ? "Carregando..." : "Atualizar mangás"}
            </button> */}

            {erro && <p role="alert">{erro}</p>}

            <div className="home-cards">

                {FiltraManga.map((item) => (
                    <Card key={item.id} manga={item} />
                ))}

            </div>

            {carregando && Cards.length === 0 && (
                <p>Carregando os mangás...</p>
            )}

            {consultaConcluida &&
                !erro &&
                Cards.length === 0 && (
                    <p>Nenhum mangá encontrado na API.</p>
                )}

            
            {login?.id ? (
                <div className="adicionar">
                    {/* <button className="" onClick={() => {navigate("CadastrarManga"); }}>
                       <img className="adicionar__img" src={adicionar} alt="adicionar manga" />
                     </button> */}
                    <button className="botao-com-div" onClick={() => { navigate("CadastrarManga"); }}>
                        +
                    </button>
                </div>
            ) : null}
            {pesquisa !== "" &&
                FiltraManga.length === 0 &&
                Cards.length > 0 && (
                    <p>Nenhum mangá corresponde à pesquisa.</p>
                )}

        </div>
    );
}

export default Home;
