//starting with all the variables I will need

wins = 0;
losses = 0;
var randomnumber = "";
var redjewelnumber = "";
var bluejewelnumber = "";
var greenjewelnumber = "";
var yellowjewelnumber = "";
var totalnumber = 0;


//this function resets the game



function reset() {


// this puts a random number in each of the variables and sets total number to 0

randomnumber = (Math.floor(Math.random() * 103)) + 18;
console.log("the random number chosen is " + randomnumber);

redjewelnumber = (Math.floor(Math.random()* 12) + 1);
console.log( "red is " + redjewelnumber);

bluejewelnumber = (Math.floor(Math.random()* 12) + 1);
console.log( "blue is " + bluejewelnumber);

greenjewelnumber = (Math.floor(Math.random()* 12)+ 1);
console.log( "green is " + greenjewelnumber);

yellowjewelnumber = (Math.floor(Math.random()* 12)+ 1);
console.log( "yellow is " + yellowjewelnumber);

$("#randomnumber").text(randomnumber);

//some other variables I'll use later

var totalnumber = 0;
console.log("total number after reset is " + totalnumber);
$("#totalscore").text(totalnumber);
};// end reset




//this function will check if we've won


// now we have the numbers, I will create an onclick event listener that grabs the number of the respective jewel, and adds it to the
//total for the user.  Each button will also check the win condition function defined below

$("#red").on("click", function() {
 totalnumber = totalnumber + redjewelnumber;
 console.log("total number is now " + totalnumber);
 $("#totalscore").text(totalnumber);
 wintest();
});

$("#blue").on("click", function() {
    totalnumber = totalnumber + bluejewelnumber;
    console.log("total number is now " + totalnumber);
    $("#totalscore").text(totalnumber);
    wintest();
});

$("#green").on("click", function() {
    totalnumber = totalnumber + greenjewelnumber;
    console.log("total number is now " + totalnumber);
    $("#totalscore").text(totalnumber);
    wintest();
});

$("#yellow").on("click", function() {
    totalnumber = totalnumber + yellowjewelnumber;
    console.log("total number is now " + totalnumber);
    $("#totalscore").text(totalnumber);
    wintest();
});

// as implied, this checks the win condition, tallies up the counter, and then resets the game (I set total number to -5
//to prevent any double losing or double winning)

function wintest() {
    if (totalnumber === randomnumber) {
        alert("you win the game!");
        wins++;
        $("#wins").text("Wins: " + wins);
        totalnumber = -5;

        reset();
    } else if (totalnumber > randomnumber) {
        alert( "you lose!")
        losses++;
        totalnumber = -5;
        $("#losses").text("Losses: " + losses)
        reset();
    }
}

