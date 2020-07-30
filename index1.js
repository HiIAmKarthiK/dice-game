ran1 = Math.random();
ran1 = ran1 * 6 + 1;
ran1 = Math.floor(ran1);

if (ran1 == 1) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
} else if (ran1 == 2) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
} else if (ran1 == 3) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
} else if (ran1 == 4) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
} else if (ran1 == 5) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
}

ran2 = Math.random();
ran2 = ran2 * 6 + 1;
ran2 = Math.floor(ran2);

if (ran2 == 1) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
} else if (ran2 == 2) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
} else if (ran2 == 3) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
} else if (ran2 == 4) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
} else if (ran2 == 5) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}

if (ran1 > ran2) {
  document.querySelector(".container h1").innerHTML = "Player1 wins!";
} else if (ran2 > ran1) {
  document.querySelector(".container h1").innerHTML = "Player2 wins!";
} else {
  document.querySelector(".container h1").innerHTML = "its draw bruh!";
}
