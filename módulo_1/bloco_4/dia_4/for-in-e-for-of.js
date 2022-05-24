let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for ( var i in names) {
    console.log('Olá ' + names[i]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (var i in car) {
    console.log(i + ' : ' + car[i]);
}