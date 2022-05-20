//ACESSANDO ELEMENTOS PELO QUERY SELECTOR

let header = document.querySelector('#header-container');
    header.style.backgroundColor = 'lightgreen';

let topTitle = document.querySelector('h1');
    topTitle.innerText = 'Administrador do Tempo da Trybe';
    topTitle.style.backgroundColor = 'lightgreen';

let emergencyTasks = document.querySelector('.emergency-tasks');
    emergencyTasks.style.backgroundColor = 'pink';

let emergencyTitleOne = document.querySelectorAll('h3')[0];
    emergencyTitleOne.style.backgroundColor = 'purple';
let emergencyTitleTwo = document.querySelectorAll('h3')[1];
    emergencyTitleTwo.style.backgroundColor = 'purple';

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
    noEmergencyTasks.style.backgroundColor = 'yellow';

let noEmergencyTitleOne = document.querySelectorAll('h3')[2];
    noEmergencyTitleOne.style.backgroundColor = 'black';
let noEmergencyTitleTwo = document.querySelectorAll('h3')[3];
    noEmergencyTitleTwo.style.backgroundColor = 'black';

let footContainer = document.querySelector('#footer-container');
    footContainer.style.backgroundColor = 'darkgreen';