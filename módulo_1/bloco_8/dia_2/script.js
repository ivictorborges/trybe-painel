// ARRAY FOR EACH
// REQUISITO 1
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
emailListInData.forEach(showEmailList);

// ARRAY FIND
// REQUISITO 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5());

// REQUISITO 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());

// REQUISITO 3
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((music) => music.id === id).title;
  }
  
  console.log(findMusic('31031685'))

// ARRAY SOME
// REQUISITO 1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((person) => person === name);
};

console.log(hasName(names, 'José'));

// ARRAY EVERY
// REQUISITO 1
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 17 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((personAge) => personAge.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));

// ARRAY SORT
// REQUISITO 1
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((a, b) => a.age - b.age);
  
  console.log(people);

// REQUISITO 2
  people.sort((a, b) => b.age - a.age);
  console.log(people);