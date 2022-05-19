// ACESSANDO ELEMENTOS PELO ID

let firstParagraph = document.getElementsByClassName("paragraphs")[0];
    firstParagraph.style.color = "yellow";
    firstParagraph.style.background = 'black';
    
let secondParagraph = document.getElementsByClassName('paragraphs')[1];
    secondParagraph.innerText = "I'm Batman !!!";
    secondParagraph.style.backgroundColor = "yellow";

let pageTitle = document.getElementById('page-title');
    pageTitle.innerText = 'BATMAN';


let subTitle = document.getElementsByTagName('h4')[0];
    subTitle.innerText = 'Bruce Wayne ?';
    subTitle.style.color = 'yellow';
    subTitle.style.background = 'black';
