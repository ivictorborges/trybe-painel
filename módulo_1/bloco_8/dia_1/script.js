// REQUISITO 1
const wakeUp = () => {
    return 'Acordando !!!';
}

// REQUISITO 2
const coffe = () => {
    return 'Bora tomar café !!!';
}

// REQUISITO 3
const sleep = () => {
    return 'Partiu dormir !!!';
}

// REQUISITO 4
const doingThings = (callback) => {
    console.log(callback());
}
doingThings(wakeUp);