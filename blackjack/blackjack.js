
let sum  =0;
let hasBlackjack = false;
let isAlive = false;
let message = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")
let playerName = "Ahmetcan"
let playerMoney = 100;

function renderGame(){
        playerEl.textContent = playerName + ": $" + playerMoney;
        sumEl.textContent = "Sum: " + sum;
        if (sum <=20) {
            message.innerText = "Do you want to draw a new card ? ";
            
        }else if(sum === 21){
            message.innerText = "You got the blackjack!!!"
            
            hasBlackjack = true;
        }else{
            message.innerText = "You are out of the game..."
            
            isAlive = false;
            playerMoney-=10;}    

        if(hasBlackjack){
                playerMoney += 100;
        
         }
         
       
}    
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;}

function startGame(){
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRndInteger(2,11);
    let secondCard = getRndInteger(2,11);
    sum  = firstCard + secondCard;
    starterDesk = "Cards: " + firstCard + "," + secondCard
    cardsEl.innerText = starterDesk;
    renderGame();
    
}

function newCard(){
  
    if(isAlive && !hasBlackjack){
    let card = getRndInteger(2,12);
    sum += card;
    cardsEl.innerText += "," +card;
    renderGame();
   } 
}
