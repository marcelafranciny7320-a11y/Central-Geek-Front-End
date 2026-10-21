
import "./Estilo/estilo.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Home from "./paginas/Home";
import NotFound from "./paginas/NotFound";
import DetalheManga from "./paginas/DetalheManga";
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from "./Componentes/Rodape.tsx";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detalhe-livro" element={<DetalheManga />} />
      </Routes>

      <Rodape />
          </BrowserRouter>
  );
}

export default App;