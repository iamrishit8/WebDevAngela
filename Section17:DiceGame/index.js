const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage1 = "dice" + randomNumber1 + ".png" ; 
const randomImage1 = "images/" + randomDiceImage1 ;

const randomDiceImage2 = "dice" + randomNumber2 + ".png" ; 
const randomImage2 = "images/" + randomDiceImage2 ;


function something(){ 

const image1 = document.querySelector(".img1").setAttribute("src", randomImage1); 
// image1.setAttribute("src", randomImage1);

const image2 = document.querySelector(".img2").setAttribute("src", randomImage2); 
// image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){ 
    document.querySelector("h1").innerHTML = "Winner is Player 1"
}
else if (randomNumber1 < randomNumber2)
{ 
    document.querySelector("h1").innerHTML = "Winner is Player 2"
}
else 
document.querySelector("h1").innerHTML = "It is a draw"
} 


