let player1: string = "Rock";
let player2: string = "Sciccors";
if (player1 === player2){
    console.log("its is a tie");   
}
 else if ((player1 === "Rock" && player2 === "Sciccors") || 
(player1 === "Sciccors" && player2 === "Paper" ) ||
(player1 === "Paper" && player2 === "Rock" )) {
    console.log("Player 1 Wins !");
    } else { console.log ("Player 2 Wins !");
    }

