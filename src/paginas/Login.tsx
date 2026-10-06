import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const navegador = useNavigate();

    function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        alert("Login Efetuado!");

        console.log("Login enviado!");
    }

    return (
        <form onSubmit={handleLogin} className="formulario">

            <h1>Login</h1>

            <br />

            <label htmlFor="usuario">Usuário:</label>
            <input
                type="text"
                id="usuario"
                placeholder="Digite seu Usuário"
                required
            />

            <br />
            <br />

            <label htmlFor="senha">Senha:</label>
            <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                required
            />

            <br />
            <br />

            <button  className="botao1" onClick={ () => { navegador("/"); } }>
                Login
            </button>

            <br />
            <br />

            <Link to="/Cadastro">
                <span>Não possui cadastro? Clique aqui!</span>
            </Link>

        </form>
    );
}

export default Login;