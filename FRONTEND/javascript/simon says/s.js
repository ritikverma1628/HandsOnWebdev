let level = 0 ;
let started = false;

let userChoice=[];
let gameChoice = [];

let h3 = document.querySelector("h3")
let btns = document.querySelectorAll(".inside");

function gameBtnFlash(btn){
    btn.classList.add("gameBtnFlash");
    setTimeout(() => {
        btn.classList.remove("gameBtnFlash")
    }, 100);
}

function userBtnFlash(btn){
    btn.classList.add("userBtnFlash");
    setTimeout(()=>{
        btn.classList.remove("userBtnFlash");
    },100)
}

function wrongBtnFlash(btn){
    btn.classList.add("wrongBtnFlash");
    setTimeout(()=>{
        btn.classList.remove("wrongBtnFlash");
    },100)
}

function userCorrectness(btn){
    let index = userChoice.length-1;
    if(gameChoice[index] == userChoice[index]){
        userBtnFlash(btn);
        if(gameChoice.length==index+1){
            setTimeout(() => {
                levelUP();
            }, 500);
        }
    }
    else{
        wrongBtnFlash(btn);
        level = 0;
        started = false;
        gameChoice=[];
        userChoice=[];
        h3.innerHTML="Wrong selection, GAME OVER <br> Press any key to Play Again";
    }
}

function levelUP(){
    level++;
    userChoice=[];
    h3.innerText = `Level: ${level}`;
    let rand = Math.floor(Math.random()*4);
    let btn = btns[rand];

    gameBtnFlash(btn);
    gameChoice.push(btn.getAttribute("id"));

}

for(let btn of btns){
    btn.addEventListener("click", function(){
        userChoice.push(btn.getAttribute("id"));
        userCorrectness(btn);
    })
}

if(started == false){
    document.addEventListener("keypress", function(){
        started=true;
        levelUP();
    })
}