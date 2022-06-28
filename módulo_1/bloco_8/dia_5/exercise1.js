// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Abacaxi', 'Mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melão', 'Maçã', 'Manga'];

const fruitSalad = (fruit, additional) => {
  const fruits = [...fruit, ...additional];
  return fruits;
};

console.log(fruitSalad(specialFruit, additionalItens));