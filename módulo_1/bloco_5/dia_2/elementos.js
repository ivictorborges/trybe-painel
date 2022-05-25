let father = (document.getElementById('elementoOndeVoceEsta').parentElement);
father.style.color = 'red';

let firstChildrenSon = (document.getElementById('elementoOndeVoceEsta').firstElementChild);
firstChildrenSon.innerText = 'Requisito 3';

let fivethSon = document.createElement('section');

father.appendChild(fivethSon);

let thirdChildrenSon = document.createElement('section');

(document.getElementById('elementoOndeVoceEsta').appendChild(thirdChildrenSon));

let firstSonOfFirstChildrenSon = document.createElement('section');

firstChildrenSon.appendChild(firstSonOfFirstChildrenSon);

let firstSon = document.getElementById('primeiroFilho');
father.removeChild(firstSon);

let whereIAm = document.getElementById('elementoOndeVoceEsta');
let secondSonOfSon = document.getElementById('segundoEUltimoFilhoDoFilho');
whereIAm.removeChild(secondSonOfSon);

let thirdSon = document.getElementById('terceiroFilho');
father.removeChild(thirdSon);

let fourthSon = document.getElementById('quartoEUltimoFilho');
father.removeChild(fourthSon);


// console.log(document.getElementById('pai').children[1]);

// console.log (document.getElementById('pai').firstElementChild);

// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// console.log(document.getElementById('pai').children[2]);