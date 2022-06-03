// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

let href = HREF_LINK.addEventListener('click', prevent)

let check = INPUT_CHECKBOX.addEventListener('click',prevent)

function prevent() {
    event.preventDefault();
}

let text = INPUT_TEXT.addEventListener('keypress', onlyA);
    function onlyA () {
        let key = event.key;
        if ( key != 'a' ) {
            event.preventDefault();
        }
    }