var randomNumber1 = Math.floor(Math.random() * 6) + 1 //random number betwen 1 to six

var randomImage = "dice" + randomNumber1 + ".png"

var randomImagesurce = "images/" + randomImage;


document.querySelectorAll("img")[0].setAttribute("src", randomImagesurce);

var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomImages = "dice" + randomNumber2 + ".png"

var randomImagesurce1 = "images/" + randomImages;

document.querySelector(".img2").setAttribute("src", randomImagesurce1);


if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "🎈🎈 Player one won";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎈🎈 Player two won"; 
}
else  {
    document.querySelector("h1").innerHTML = "🎈🎈DRAW , Play again";
}
