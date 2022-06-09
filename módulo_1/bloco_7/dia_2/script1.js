const person = {
    Name: 'Victor',
}

const createKey = (object, key, value) => {
    object[key] = value;
}
createKey(person, 'Age', '26');
createKey(person, 'Live', 'Recife');

console.log(person);