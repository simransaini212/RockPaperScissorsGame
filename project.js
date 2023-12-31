let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const showMsg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const genCompChoice=()=>{                               //to generate random choices from computer
    let genCompChoice= ["Rock", "Paper", "Scissors"]   //(generating string is not possible for random fn that's why we use array so that computer can generate random numbers from 0-4 and we get the choice)
const rndId= Math.floor(Math.random()*3);

return genCompChoice[rndId];
}
const DrawGame=()=>
{
    showMsg.innerText="Game was Draw. Play Again";
    showMsg.style.backgroundColor="Grey";
}
const showWinner=(userWin, userChoice, compChoice)=>
{if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    showMsg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    
    showMsg.style.backgroundColor="Green";
}
else{
    showMsg.innerText=`You Lost. ${compChoice} beats Your ${userChoice}`;
    compScore++;
    compScorePara.innerText=compScore;
    showMsg.style.backgroundColor="Red";
}

}

const playGame=(userChoice)=>{                            //MAin Function
const compChoice= genCompChoice();
if(userChoice===compChoice)
    {DrawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
       userWin= compChoice==="Paper"? false : true;
    } 
    else if(userChoice==="Paper")
    {
        userWin= compChoice==="Scissors"? false: true;
    }
    else
    {
        userWin= compChoice==="rock"? false: true;

    }
    showWinner(userWin, userChoice, compChoice);
}


}

choices.forEach((choice) => {
choice.addEventListener("click", ()=> {
    let userChoice= choice.getAttribute("id");
    playGame(userChoice);
})
})