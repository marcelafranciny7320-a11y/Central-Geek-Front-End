import { useNavigate } from "react-router-dom";

function NotFound() {

    const navegador = useNavigate();

    function HandleVoltar() {
        navegador(-1)
    }

    return(
        <div className="not-Found">
          <h1>Page not found</h1>
          <h2>Error 404</h2>
          <h3>Informe a URL correta</h3>
           <br />
            <br />
            <button className="botao2" onClick={HandleVoltar}>Voltar</button>
        </div>
    )
}

export default NotFound;