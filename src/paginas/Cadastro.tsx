
import type { FormEvent } from "react";

function Cadastro () {

     function handleCadastrar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

         alert("Cadastro Efetuado!");

        console.log("Cadastro enviado!");
        
    }

    return (
        <form onSubmit={handleCadastrar} className="formulario">

            <h1>Cadastro</h1>

            <label htmlFor="usuario">Nome:</label>
            <input
                id="usuario"
                type="text"
                placeholder="Digite seu nome"
                required
            />
    
            <br />
            <br />

            <label htmlFor="senha">Senha:</label>
            <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                required
            />

            <br />
            <br />

            <label htmlFor="email">E-mail:</label>
            <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
            />

             <br />
            <br />


            <button  className="botao1" type="submit">
                Cadastrar
            </button>

             <br />
            <br />

        </form>
    );
}

export default Cadastro;