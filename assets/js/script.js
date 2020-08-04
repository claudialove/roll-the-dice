
//selectors and manipulators for first die
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "assets/images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//selectors and manipulators for second die
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "assets/images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
   

//logic for declaring the winner
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "👔 It's a tie!"
        } else if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!"
        } else if  (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 2 wins!!"
        } else {
            document.querySelector("h1").innerHTML = "Hmmm, something isn't right..."
        };

    
 








