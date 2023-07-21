const cuadradoRed = document.getElementById('divRed');
const cuadradoBlue = document.getElementById('divBlue');
const cuadradoGreen = document.getElementById('divGreen');
const cuadradoYellow = document.getElementById('divYellow');

function cambiarRed() {
    cuadradoRed.style.backgroundColor ='black';
}
cuadradoRed.addEventListener("click",cambiarRed);

function cambiarBlue() {
    cuadradoBlue.style.backgroundColor ='black';
}
cuadradoBlue.addEventListener("click",cambiarBlue);

function cambiarGreen() {
    cuadradoGreen.style.backgroundColor ='black';
}
cuadradoGreen.addEventListener("click",cambiarGreen);

function cambiarYellow() {
    cuadradoYellow.style.backgroundColor ='black';
}
cuadradoYellow.addEventListener("click",cambiarYellow);



let aquiGuardoElColor;
const key = document.getElementById('key')
document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        aquiGuardoElColor = 'pink';
    }
    else if (event.key === 's' || event.key === 'S') {
        aquiGuardoElColor = 'orange';
    }
    else if (event.key === 'd' || event.key === 'D') {
        aquiGuardoElColor = 'skyblue';
    }
    key.style.backgroundColor = aquiGuardoElColor
})


let aquiGuardoOtroColor;
const key1 = document.getElementById('key1')
document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        aquiGuardoOtroColor = 'yellow';
    }
    else if (event.key === 'w' || event.key === 'W') {
        aquiGuardoOtroColor = 'blue';
    }
    else if (event.key === 'e' || event.key === 'E') {
        aquiGuardoOtroColor = 'brown';
    }
    key1.style.backgroundColor = aquiGuardoOtroColor
})