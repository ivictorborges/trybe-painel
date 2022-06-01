const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

let lists = document.getElementsByTagName('li');

  for (let i = 0; i < lists.length; i += 1) {
    let eventClick = lists[i].addEventListener('click', setClass);
  }

function setClass(eventClick) {
  let classTech = document.querySelector('.tech');
  classTech.classList.remove('tech');
  if (eventClick.target.className == '') {
    eventClick.target.classList.add('tech');
  input.value = '';
  }
}

let eventInput = input.addEventListener('input',editText);

function editText (eventInput) {
  let classEdit = document.querySelector('.tech');
  classEdit.innerText = eventInput.target.value;
}

let eventClickText = myWebpage.addEventListener('dblclick',redirectPage);
function redirectPage(eventClickText) {
  window.location.replace('https://github.com/ivictorborges');
}

let eventMouseOn = myWebpage.addEventListener('mouseover',changeColorOn);
function changeColorOn (eventMouseOn) {
  eventMouseOn.target.style.color = 'black';
}
let eventMouseOff = myWebpage.addEventListener('mouseout',changeColorOff);
function changeColorOff(eventMouseOff) {
  eventMouseOff.target.style.color = 'unset';
}


// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

 