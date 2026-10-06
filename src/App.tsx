import Menu from "./Componentes/Menu";
import "./Estilo/estilo.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Home from "./paginas/Home";
import NotFound from "./paginas/NotFound";
import DetalheLivro from "./paginas/DetalheLivro";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detalhe-livro" element={<DetalheLivro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;