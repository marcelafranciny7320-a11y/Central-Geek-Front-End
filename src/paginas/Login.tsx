import { Link, useNavigate } from "react-router-dom";

function Login () {

 const navegador = useNavigate();

    function HandleVoltar() {
        navegador('/')
    }

     function HandleLogin() {
        navegador('/')
    }


    return(
        <div>
           <h1>Login</h1>
            <br />
            <br />
            <div className="container-nome">
                <label>Nome:</label>
            <input type="name" placeholder="Digite o seu nome" />
            </div>
            <br />
            <br />
           <div className="container-senha">
             <label>Senha:</label>
            <input type="password" placeholder="Digite a sua senha" />
           </div>
            <br />
            <br />
             <button className="botao1" onClick={HandleLogin}>Login</button>
              <br />
            <br />
            <button className="botao2" onClick={HandleVoltar}>Voltar</button>
            <br />
            <div style={{ marginTop: "15px" }}>
        <span>Ainda não tem uma conta? </span>
        <Link to="/Cadastro">Criar conta</Link>
        </div>
        
        </div>
    )
}

export default Login;