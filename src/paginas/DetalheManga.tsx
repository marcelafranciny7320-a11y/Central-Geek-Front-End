import { useNavigate } from "react-router-dom";

function DetalheManga() {

    const navigate = useNavigate();

    return (

        <div>
           
         <button className="btn-voltar" onClick={() => {navigate("/"); }}>Voltar</button>

         <div className="detalheManga-superior box">
            <div className="image-detalhe-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZetok3bfNKYK5WEkrxj05ILhVzT6Z63FfdaV1FB0Mg&s=10" alt="image" />
            </div>
            <div>
                <h1>Tomie</h1>
                <h2> Volume: <b>1</b></h2>
                <h1>Avaliação: <b>9</b></h1>
                <h1> <b>R$92,99</b></h1>

                <p className="estoque">Em estoque!</p>

                <button className="botao-comprar"onClick={() => {navigate("/"); }}>Comprar Agora</button>
            </div>
         </div>

         <div className="detalheManga-inferior box">

           

            <div className="inferior-esquerda">
             <h1>Detalhes da Obra</h1>
             <p className="label-nome-obra">Nome da Obra:</p>

             <h1 className="text-titulo-obra">
                <b>Tomie</b>
             </h1>

             <p className="label-nome-obra">Autor:</p>

             <h1 className="text-titulo-obra">
                <b>Junji Ito</b>
            </h1>
            </div>
             
            <div className="inferior-direita">
                <br />
                <br />
                <br />
              <p className="label-nome-obra">Ano:</p>

            <h1 className="text-titulo-obra">
                <b>1987</b>
            </h1>

              <p className="label-nome-obra">Volume:</p>

            <h1 className="text-titulo-obra">
                <b>1</b>
            </h1>

            <button  onClick={() => {navigate("/CadastrarManga"); }} className="btn-adicionar">
                Adicionar
            </button>
            </div>

         </div>
            

        </div>
    );
}


export default DetalheManga;