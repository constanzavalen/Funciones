/* function pintar(){ 
ele = document.getElementById("ele1")  
ele.style.backgroundColor = 'yellow' 
} 
ele.addEventListener("click", pintar);*/



function cambioColor(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", () => {
    return cambioColor(ele, 'yellow');
});