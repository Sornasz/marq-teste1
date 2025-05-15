export function classifyBenefit(description) {
  const normalizedDesc = description.toLowerCase();

  const categories = {
    "Alimentação": ["restaurante", "supermercado", "padaria", "lanchonete", "café"],
    "Saúde": ["farmácia", "hospital", "clínica", "médico", "dentista"],
    "Transporte": ["uber", "táxi", "ônibus", "metrô", "combustível"],
    "Cultura": ["cinema", "teatro", "museu", "livraria", "show"],
    "Outros": []
  };

  for (const [category, terms] of Object.entries(categories)) {
    if (terms.some(term => normalizedDesc.includes(term))) {
      return category;
    }
  }

  return "Outros";
}