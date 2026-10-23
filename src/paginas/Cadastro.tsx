
import { useState, type FormEvent } from "react";
import { cadastrarUsuario } from "../api";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function handleCadastrar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMensagem("");
        setCarregando(true);

        try {
            await cadastrarUsuario({
                displayName: nome,
                username: usuario,
                email: email,
                passwordHash: senha,
            });

            setMensagem("Cadastro realizado com sucesso!");
            setNome("");
            setUsuario("");
            setEmail("");
            setSenha("");
        } catch (error) {
            setMensagem(
                error instanceof Error
                    ? error.message
                    : "Erro ao realizar cadastro."
            );
        } finally {
            setCarregando(false);
        }
    }

    return (
        <form onSubmit={handleCadastrar} className="formulario">
            <h1>Cadastro</h1>

            <label htmlFor="nome">Nome:</label>
            <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                required
            />

            <br /><br />

            <label htmlFor="usuario">Nome de usuário:</label>
            <input
                id="usuario"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Escolha um usuário"
                required
            />

            <br /><br />

            <label htmlFor="email">E-mail:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
            />

            <br /><br />

            <label htmlFor="senha">Senha:</label>
            <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                required
            />

            <br /><br />

            <button className="botao1" type="submit" disabled={carregando}>
                {carregando ? "Cadastrando..." : "Cadastrar"}
            </button>

            {mensagem && <p role="status">{mensagem}</p>}
        </form>
    );
}

export default Cadastro;