
import { useNavigate } from "react-router-dom";

function Cadastro () {

 const navegador = useNavigate();

    function HandleVoltar() { 
        navegador('/')
    }

    function HandlleCadastrar() {
        navegador('/')
    }
 
    return(
        <div>

           <h1>Cadastro</h1>
            <br />
            <br />
            <div className="container-nome">
                <label>Nome:</label>
                <input type="name" placeholder="Digite o seu nome" />
            </div>
            <br />
            <br />
             <div className="container-email">
            <label>Email:</label>
            <input type="Email" placeholder="Digite o seu Email" />
          </div>
          <br />
          <br />
            <div className="container-senha">
                <label>Senha:</label>
                <input type="password" placeholder="Digite a sua senha" />
          </div>
          <br />
          <br />
              <button className="botao1" onClick={HandlleCadastrar}>Cadastrar</button>
               <br />
            <br />
          <button className="botao2" onClick={HandleVoltar}>Voltar</button>
 
        </div>
    )
}

export default Cadastro;