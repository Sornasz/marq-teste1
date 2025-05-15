export function classifyBenefit(description) {
  const normalizedDesc = description.toLowerCase();

  const categories = {
    "Alimentação": ["restaurante", "supermercado", "padaria", "lanchonete", "café"],
    "Saúde": ["farmácia", "hospital", "clínica", "médico", "dentista"],
    "Transporte": ["uber", "táxi", "ônibus", "metrô", "combustível"],
    "Cultura": ["cinema", "teatro", "museu", "livraria", "show"],
    "Outros": ["Academia", "Futebol", "Barbearia", "Happy Hour"]
  };

  for (const [category, terms] of Object.entries(categories)) {
    if (terms.some(term => normalizedDesc.includes(term))) {
      return category;
    }
  }

  return "Outros";
}


export function calculateRemainingBalance (transactions) {
    const initialBalance ={
    "Alimentação": 1000,
    "Saúde": 1000,
    "Transporte": 1000,
    "Cultura": 1000 ,
    "Outros": 1000
    };
    
    const remainingBalance = { ...initialBalance};

     transactions.forEach(transaction => {
    const { categoria, valor } = transaction;
    
    // Verifica se a categoria existe no objeto de saldo restante
    if (categoria in remainingBalance) {
      remainingBalance[categoria] -= valor;
    }
  });

  return remainingBalance;
};