ran1 = Math.floor(Math.random() * 6 + 1); //random no from 1 to 6

iamge1Source = "images/dice" + ran1 + ".png"; //include random number in path

document.querySelector(".dice .img1").setAttribute("src", iamge1Source); //set path to image1Source

ran2 = Math.floor(Math.random() * 6 + 1); //random no from 1 to 6

iamge2Source = "images/dice" + ran2 + ".png"; //include random number in path

document.querySelector(".dice .img2").setAttribute("src", iamge2Source); //set path to image2Source

if (ran1 > ran2) {
  document.querySelector(".container h1").innerHTML = "🎇Player1 won bruh!";
} else if (ran2 > ran1) {
  document.querySelector(".container h1").innerHTML = "Player2 won bruh!🎇";
} else {
  document.querySelector(".container h1").innerHTML = "its draw bruh!";
}
