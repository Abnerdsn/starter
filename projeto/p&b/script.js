import React, { useState } from 'react';

const App = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    duploControle: false,
    portaDianteiraEsquerda: true,
    portaDianteiraDireita: true,
    portaTraseiraEsquerda: true,
    portaTraseiraDireita: true
  });

  const [weights, setWeights] = useState({
    pesoVazio: 1491.91,
    piloto: 175,
    bagagemPiloto: 0,
    dianteiroEsquerdo: 175,
    bagagemPassageiro: 0,
    atrasDireito: 0,
    bagagemDireito: 0,
    atrasEsquerdo: 0,
    bagagemEsquerda: 0
  });

  const handleCheckboxChange = (event) => {
    setCheckboxValues({
      ...checkboxValues,
      [event.target.name]: event.target.checked
    });
  };

  const handleWeightChange = (event) => {
    setWeights({
      ...weights,
      [event.target.name]: parseFloat(event.target.value)
    });
  };

  return (
    <div>
      <h1>Peso e Balanceamento Robinson R44</h1>
      <div className="checkbox">
        <h2>Marque se instalado</h2>
        <label>
          <input
            type="checkbox"
            name="duploControle"
            checked={checkboxValues.duploControle}
            onChange={handleCheckboxChange}
          />
          Duplo Controle
        </label>
        <label>
          <input
            type="checkbox"
            name="portaDianteiraEsquerda"
            checked={checkboxValues.portaDianteiraEsquerda}
            onChange={handleCheckboxChange}
          />
          Porta Dianteira Esquerda
        </label>
        <label>
          <input
            type="checkbox"
            name="portaDianteiraDireita"
            checked={checkboxValues.portaDianteiraDireita}
            onChange={handleCheckboxChange}
          />
          Porta Dianteira Direita
        </label>
        <label>
          <input
            type="checkbox"
            name="portaTraseiraEsquerda"
            checked={checkboxValues.portaTraseiraEsquerda}
            onChange={handleCheckboxChange}
          />
          Porta Traseira Esquerda
        </label>
        <label>
          <input
            type="checkbox"
            name="portaTraseiraDireita"
            checked={checkboxValues.portaTraseiraDireita}
            onChange={handleCheckboxChange}
          />
          Porta Traseira Direita
        </label>
      </div>
      <table>
        <
