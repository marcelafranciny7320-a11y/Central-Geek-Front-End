
import { useState, type FormEvent } from "react";
import { cadastrarManga } from "../api";

function CadastrarManga() {
    const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function handleCadastrar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formulario = event.currentTarget;
        const dadosFormulario = new FormData(formulario);

        const dados = {
            title: String(dadosFormulario.get("title")),
            volumeNumber: Number(dadosFormulario.get("volumeNumber")),
            isbn: String(dadosFormulario.get("isbn")),
            author: String(dadosFormulario.get("author")),
            publisher: String(dadosFormulario.get("publisher")),
            genre: String(dadosFormulario.get("genre")),
            synopsis: String(dadosFormulario.get("synopsis")),
            coverImageUrl: String(dadosFormulario.get("coverImageUrl")),
            condition: String(dadosFormulario.get("condition")) as
                "NOVO" | "SEMINOVO" | "USADO",
            ownerId: String(dadosFormulario.get("ownerId")),
            notes: String(dadosFormulario.get("notes") || ""),
        };

        setMensagem("");
        setCarregando(true);

        try {
            await cadastrarManga(dados);
            setMensagem("Mangá cadastrado com sucesso!");
            formulario.reset();
        } catch (error) {
            setMensagem(
                error instanceof Error
                    ? error.message
                    : "Erro ao cadastrar mangá."
            );
        } finally {
            setCarregando(false);
        }
    }

    return (
        <form className="formulario" onSubmit={handleCadastrar}>
            <h1>Cadastrar mangá</h1>

            <label htmlFor="title">Título:</label>
            <input id="title" name="title" required />

            <br /><br />

            <label htmlFor="volumeNumber">Volume:</label>
            <input
                id="volumeNumber"
                name="volumeNumber"
                type="number"
                min="1"
                required
            />

            <br /><br />

            <label htmlFor="isbn">ISBN:</label>
            <input id="isbn" name="isbn" required />

            <br /><br />

            <label htmlFor="author">Autor:</label>
            <input id="author" name="author" required />

            <br /><br />

            <label htmlFor="publisher">Editora:</label>
            <input id="publisher" name="publisher" required />

            <br /><br />

            <label htmlFor="genre">Gênero:</label>
            <input id="genre" name="genre" required />

            <br /><br />

            <label htmlFor="synopsis">Sinopse:</label>
            <textarea id="synopsis" name="synopsis" required />

            <br /><br />

            <label htmlFor="coverImageUrl">URL da capa:</label>
            <input
                id="coverImageUrl"
                name="coverImageUrl"
                type="url"
                required
            />

            <br /><br />

            <label htmlFor="condition">Condição:</label>
            <select id="condition" name="condition" defaultValue="NOVO">
                <option value="NOVO">Novo</option>
                <option value="SEMINOVO">Seminovo</option>
                <option value="USADO">Usado</option>
            </select>

            <br /><br />

            <label htmlFor="ownerId">ID do proprietário:</label>
            <input
                id="ownerId"
                name="ownerId"
                placeholder="ID do usuário cadastrado"
                required
            />

            <br /><br />

            <label htmlFor="notes">Observações:</label>
            <textarea id="notes" name="notes" />

            <br /><br />

            <button className="botao1" type="submit" disabled={carregando}>
                {carregando ? "Cadastrando..." : "Cadastrar mangá"}
            </button>

            {mensagem && <p role="status">{mensagem}</p>}
        </form>
    );
}

export default CadastrarManga;