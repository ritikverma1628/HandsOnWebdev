const buttons = document.querySelectorAll("button");
for(let btn of buttons){
    btn.addEventListener("click",()=>{
        console.log("YOu followed this account");
    })
}