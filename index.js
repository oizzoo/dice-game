function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function randomizeLeft() {
    var number = randomNumber();
    document.querySelector(".dice .img1").setAttribute("src", "images/dice" + number + ".png");
    return number;
}

function randomizeRight() {
    var number = randomNumber();
    document.querySelector(".dice .img2").setAttribute("src", "images/dice" + number + ".png");
    return number; 
}

function getValues() {
    var first = randomizeLeft();
    var second = randomizeRight();
    return [first, second];
}

var [first, second] = getValues();

function whoIsTheWinner() {
    if (first > second) {
        document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
    } else if (first < second) {
        document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector(".container h1").innerHTML = "DRAW!";
    }
}

whoIsTheWinner();
