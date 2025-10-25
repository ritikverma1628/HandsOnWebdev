let btn = document.querySelector("#btn");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    let color = "rgb("+r+","+g+","+b+")";

    h1.innerText = color;
    
    let divColor = document.querySelector("#box");
    divColor.style.backgroundColor = color;
});