// let body = document.querySelector("body");

// let p = document.createElement("p");
// body.append(p);
// p.innerText = "Hey, I am red";
// p.style.color = "red";

// let h3 = document.createElement("h3");
// body.append(h3);
// h3.innerText = "Hey, I am blue";
// h3.style.color = "blue";

// let div = document.createElement("div");
// body.append(div);
// div.style.border = "2px solid black";
// div.style.backgroundColor = "pink";

// let h1 = document.createElement("h1");
// h1.innerText = "Hey, I'm in div";
// div.appendChild(h1);

// let p2 = document.createElement("p");
// div.append(p2);
// p2.innerText = "ME TOO!";



// let body = document.querySelector("body");
// let input = document. createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("placeholder","username");

// body.append(input);

// let button = document.createElement("button");
// button.innerText = "Click me !"
// body.insertAdjacentElement('beforeend',button);
// button.setAttribute("id","btn");

// let but = document.querySelector("#btn");
// but.style.color = "white";
// but.style.backgroundColor = "blue";


// let h1 = document.createElement("h1");
// body.append(h1);
// h1.innerText="DOM practice!";
// h1.style.textDecoration = "underline wavy purple"


// let p3 = document.createElement("p");
// body.append(p3);
// p3.innerHTML = "Apna College, <b>Delta</b> Practice"


// let button = document.createElement("button")
// let body = document.querySelector("body");
// body.append(button);
// button.innerText = "Click Me!";

// button.addEventListener("click", function(){
//     this.style.backgroundColor = "blue";
// })



let input = document.createElement("input");
let body = document.querySelector("body")
body.append(input);
input.setAttribute("type", "text")
input.setAttribute("placeholder", "Enter your name");

let h2 = document.createElement('h2')
body.insertAdjacentElement("afterbegin", h2);
h2.innerText = "FORM";

input.addEventListener('input',function(){
    let filtered = input.value.replace(/[^a-zA-Z ]/g,"");
    input.value = filtered;
    h2.innerText = filtered;
})



