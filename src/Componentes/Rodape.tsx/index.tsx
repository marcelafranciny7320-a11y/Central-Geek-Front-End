import {
  FileText,
  ShieldCheck,
  Headset,
  Cookie
} from "lucide-react";

import "../../Estilo/estilo.css";
import logo from "../../assets/logo.png"
function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">

        {/* Coluna 1: Sobre */}
        <div className="rodape-coluna1">
          <img src={logo} width="400px" height="400px"/> 
          <h3 className="rodape-logo">
            Central Geek
          </h3>

          <p>
            A sua plataforma para trocar e vender mangás usados.
          </p>
        </div>

        {/* Coluna 2: Links úteis */}
        <div className="rodape-coluna2">
          <h4>Ajuda e informações</h4>

          <a href="#">
            <FileText size={17} aria-hidden="true" />
            <span>Termo de Uso</span>
          </a>

          <a href="#">
            <ShieldCheck size={17} aria-hidden="true" />
            <span>Política de Privacidade</span>
          </a>

          <a href="#">
            <Headset size={17} aria-hidden="true" />
            <span>Suporte</span>
          </a>

          <a href="#">
            <Cookie size={17} aria-hidden="true" />
            <span>Gerenciar Cookies</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="rodape-copyright">
          <p>
            © 2026 Central Geek. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Rodape;