console.log(document.getElementById('pai').children[1]);

let father = (document.getElementById('elementoOndeVoceEsta').parentElement);
    father.style.color = 'red';

let firstChildrenSon = (document.getElementById('elementoOndeVoceEsta').firstElementChild);
    firstChildrenSon.innerText = 'Requisito 3';

console.log (document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').children[2]);