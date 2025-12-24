let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("click",function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function gameFlash (btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash (btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userseq = [];
    level++;                        
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns (idx) {
  if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp , 1000);
    }
  }else{
    h2.innerText = `Game over! your score was ${level} please press any key start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( function (){
        document.querySelector("body").style.backgroundColor = "white";
    },150)
    reset();
  }
}

function btnPress () {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}
