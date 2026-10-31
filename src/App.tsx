
import "./Estilo/estilo.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./paginas/Cadastro";
import CadastrarManga from "./paginas/CadastrarManga";
import Login from "./paginas/Login";
import Home from "./paginas/Home";
import NotFound from "./paginas/NotFound";
import DetalheManga from "./paginas/DetalheManga";
import Cabecalho from "./Componentes/Cabecalho";
import Manga from "./paginas/Manga";
import Rodape from "./Componentes/Rodape.tsx";
import { Perfil } from "./paginas/Perfil.tsx";
function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
         <Route path="/Perfil/editar" element={<Perfil />} />
        <Route path="/CadastrarManga" element={<CadastrarManga />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detalhe-livro" element={<DetalheManga />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/manga/:id" element={<Manga />} />
      </Routes>

      <Rodape />
          </BrowserRouter>
  );
}

export default App;