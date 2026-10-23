import { useCallback, useEffect, useState } from "react";
import Card from "../Componentes/cards";
import "../Estilo/estilo.css";
import type { tpCards } from "../types/cards";
import { listarMangas } from "../api";

function Home() {
    const [Cards, setCard] = useState<tpCards[]>([]);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [consultaConcluida, setConsultaConcluida] = useState(false);

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
            <button
                onClick={() => void carregarCardsAsync()}
                disabled={carregando}
            >
                {carregando ? "Carregando..." : "Atualizar mangás"}
            </button>

            {erro && <p role="alert">{erro}</p>}

            <div className="home-cards">
                {Cards.map((item) => (
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
        </div>
    );
}

export default Home;