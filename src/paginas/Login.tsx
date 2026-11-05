import { useContext, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUsuario, type UsuarioDTO } from "../api";
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Login() {
    const navegador = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [usuario, setUsuario] = useState<UsuarioDTO | null>(null);
    const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(false);
    const context = useContext(UsuarioLogadoContext);
    

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMensagem("");
        setCarregando(true);

        try {

            const logado = await loginUsuario({
                email: email,
                passwordHash: senha
            });
            setUsuario(logado);
            console.log(logado);
            context?.setUsuarioLogado(logado);
            

            navegador("/");
        } catch (error) {
            setMensagem(
                error instanceof Error
                    ? error.message
                    : "Não foi possível realizar o login."
            );
        } finally {
            setCarregando(false);
        }
    }

    return (
        <form onSubmit={handleLogin} className="formulario">
            <h1>Login</h1>

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
                {carregando ? "Entrando..." : "Login"}
            </button>

            {mensagem && <p role="alert">{mensagem}</p>}

            <br /><br />

            <Link to="/Cadastro">
                <span>Não possui cadastro? Clique aqui!</span>
            </Link>
        </form>
    );
}

export default Login;