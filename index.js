var imgNum = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randNum1= Math.floor((Math.random()*6));
var randNum2= Math.floor((Math.random()*6));

document.getElementById("img1").setAttribute("src",imgNum[randNum1]);
document.getElementById("img2").setAttribute("src",imgNum[randNum2]);

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randNum1 < randNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  