import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

const Cabecalho = () => {
  return (
    <div className="cabecalho">
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-primario" href="https://www.google.com.br">
          Sair
        </a>
      </div>
    </div>
  );
};

export default Cabecalho;
