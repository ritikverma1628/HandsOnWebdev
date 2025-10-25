let btn = document.querySelector("button");

let input = document.querySelector("input");

btn.addEventListener("click",function(event){
    event.preventDefault();
    let li = document.createElement("li");
    let delbtn= document.createElement("button");
    delbtn.innerText="Delete Task";
    delbtn.classList.add("delbtn")
    li.innerText = input.value;
    let ul = document.querySelector("ul");
    li.append(delbtn);
    ul.append(li);
    input.value="";
})

let ul = document.querySelector("ul")
ul.addEventListener("click", function(event){
    let target = event.target.nodeName;
    if(target=="BUTTON"){
        event.target.parentElement.remove();
    }
        
        
})

