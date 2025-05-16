import React, { useState } from 'react';
import { classifyBenefit, calculateRemainingBalance } from './utils/benefits';
import './App.css';

function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleClassify = () => {
    if (description.trim()) {
      const result = classifyBenefit(description);
      setCategory(result);
    }
  };

  // Adicionar nova transação
  const handleAddTransaction = () => {
    if (!description.trim() || !value || isNaN(value)) return;

    const result = classifyBenefit(description);
    const newTransaction = {
      categoria: result,
      valor: parseFloat(value),
    };

    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setValue('');
    setCategory('');
  };

  const saldo = calculateRemainingBalance(transactions);

  return (
    <div className="app-container">
      <h1>Sistema de Benefícios</h1>
        <h2>MarQ HR</h2>

      <div className="section">
        <h2>1. Classificação de Benefício</h2>
        <div className="input-group">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição (ex: restaurante, farmácia)"
            className="input-field"
          />
          <button onClick={handleClassify} className="btn">Classificar</button>
        </div>

        {category && (
          <div className="result">
            <p><strong>Categoria identificada:</strong> {category}</p>
          </div>
        )}
      </div>

      <div className="section">
        <h2>2. Registro de Transações e Saldo</h2>
        <div className="input-group">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição da despesa"
            className="input-field"
          />
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor da transação"
            className="input-field"
          />
          <button onClick={handleAddTransaction} className="btn">Adicionar</button>
        </div>

        <h3>Transações registradas:</h3>
        <ul>
          {transactions.map((t, index) => (
            <li key={index}>
              {t.categoria} - R$ {t.valor.toFixed(2)}
            </li>
          ))}
        </ul>

        <h3>Saldo restante por categoria:</h3>
        <ul>
          {Object.entries(saldo).map(([cat, val]) => (
            <li key={cat}>
              {cat}: R$ {val.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;