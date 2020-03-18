
//this number should not reset everytime the game reloads
 winNumber = 1;
function Gamereset() {
//creating a variable that will hold all possible words in an array
var wordbank = [
    "e p o n a",
    "g a n o n d o r f",
    "t r i f o r c e",
    "g e r u d o",
    "h y r u l e",
    "b o o m e r a n g",
    "o c a r i n a",
    "g o r o n",
    "t i n g l e",
    "t e r m i n a",
    "m a j o r a",
    "s h e i k a h",
    "w i n d w a k e r",
    "m a s t e r s w o r d",
    "z o r a s",
    "g r e a t f a i r y",


    ]
    //create an array that holds the alphabet
var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// create an array to keep the bad guesses
var wrongguesses = [];
// an array that tracks lifes that are left
var livesleft = 6
// more variables to affect its place in the html
var puzzletext = document.getElementById("Puzzle-Text");
var livestext = document.getElementById("Lives-Text")
var wrongtext = document.getElementById("Wrong-Guesses")

//variable used to see if you won the game
var Gamehasbeenwon = false





// creating a variable that will directly affect it's place in the html
console.log("-------------");

var wins = document.getElementById("Win-Counter");


console.log(winNumber)
console.log("-------------");



// when the page is loaded, a random choice will be selected from the word bank....





var randomselection = wordbank[Math.floor(Math.random() * wordbank.length)];

console.log("the choice made is " +randomselection);
console.log("-------------");

//and will convert all charcters into underscores...
var unsolvedchoice = randomselection.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g, "_");
console.log("here you should see underscores " + unsolvedchoice);

//this just makes sure that he result is just a string
var unsolvedchoicestring = String(unsolvedchoice);
console.log(" here you should see the underscore of the string " + unsolvedchoicestring)

// this converts that answer into an array
var unsolvedarry = unsolvedchoicestring.split("");

// then I use this variable to change it back into a string (so it doesn' have commas)
var squisedarray = unsolvedarry.join(" ")

console.log("-------------");
console.log(puzzletext)
// and place those underscores directly on the webpage
puzzletext.textContent = squisedarray
console.log("-------------");
// this function will convert the unsolved choice and the answer strings so i can use
// includes and search for the hyphen 
// this will allow the game to begin
    var puzzlestring = String(puzzletext);
    var n = unsolvedarry.includes("_");



console.log("puzzletext contain underscore? " + n);

if (n = "true"){
   alert("It's dangerous to go alone!");
   console.log ("the game has started");
   


} else {console.log("the game has not begun")}

console.log("-------------");

// this function will check if I have won the game and return a Boolean


//now the game has started, I'll add an event listener for the key being pressed
document.onkeyup = function(event) {
   console.log("you just pressed " + event.key)
   console.log("-------------");


// converts the guess to lowercase in case of capslock

   var guess = event.key.toLowerCase();
   console.log("lowercase guess is " + guess)

// if the key matches up...
console.log("-------------");
   var keychecker = randomselection.includes(event.key);
   console.log("puzzle string includes it? " + keychecker);
   var alphabetchecker = alphabet.includes(guess);
   console.log("does alpabet include guess? " + alphabetchecker);

// variable that checks if we have already guessed something wrong
console.log("-------------");
var wrongguesschecker = wrongguesses.includes(guess);
console.log("has this letter been guessed wrong yet?" + wrongguesschecker)

// variable that returns the position of the guess
var guessposition1 = randomselection.indexOf(guess)
var guessposition2 = randomselection.lastIndexOf(guess)

//function that will take the choice and replace it at the appropriate place
function insertString() { 
    console.log("he unsolved array is " +unsolvedarry);
    console.log("the right letter is " + rightposition1);
    console.log("the first right position of that letter is " + guessposition1);
    console.log("-------------");

    unsolvedarry[guessposition1] = rightposition1;
    unsolvedarry[guessposition2] = rightposition2;

    var squisedarray = unsolvedarry.join(" ")

    puzzletext.textContent 
            = squisedarray; 
        console.log("the unsolved array is now " + unsolvedarry);
    

     }
//a function that turns the string 
function stringarray() { 
    var unsolvedchoicearray = unsolvedchoicestring.split(""); 
} 


// an if staetment that will check if the key pressed matches the "answer" contained in alphabetchecker

console.log("-------------");
if (keychecker === true && alphabetchecker === true) {
   console.log("You got a letter right!!")
   console.log("the right guess happens in position" + guessposition1 + " and " + guessposition2 );
   console.log("-------------");
   //this should return the letters from the right answer and store them in rightposition 1 ane 2
   var rightposition1 = randomselection.slice(guessposition1, (guessposition1 + 1))
   var rightposition2 = randomselection.slice(guessposition2, (guessposition2 + 1))
   console.log(rightposition1 + rightposition2)
   console.log("-------------");

   insertString()
   console.log("-------------");
   stringarray();
} 


   



else if ( keychecker === false && alphabetchecker === true && wrongguesschecker === false) {
   console.log("no you are wrong");
   // this will lower the lives down by one everytime a wrong guess happens
   livesleft--;
   console.log("lives left = " + livesleft);
   // this writes it to the HTML
   livestext.textContent = "Lives Left " + livesleft;
   // pushes the wrong guess into the wrong guess array
   wrongguesses.push(guess);
   console.log("wrong guesses now contain " + wrongguesses);
   // writes the new number to the HTML
   wrongtext.textContent= ("Wrong guesses: " + wrongguesses);
   



} 

else {
   console.log("wow you broke it-- nothing should happen")
}
console.log("-------------");

// if lifes reaches 0, you lose and the game resets with a new choice
if (livesleft === 0)  {
   alert("Game Over! The word was " + randomselection + ". Don't give up!  Try Again!");
   Gamereset();
   livestext.textContent = "Lives Left 6";
   wrongguesses.textContent = "";
   wrongtext.textContent= "Wrong guesses: ";
}

//we'll check if the game is won

console.log("is squished array working here? " + squisedarray)
console.log(squisedarray.includes("_"))

function GameWinFunction() {
   if (unsolvedarry.includes("_") === false)  {
    Gamehasbeenwon = true;
    alert("you won the game!  Press any key to try a new one!");
    wins.textContent = ("Wins: " + winNumber);
   winNumber++
   console.log ("the number of wins will next be " + winNumber)
    document.onkeyup = function(event) {
        wrongguesses.textContent = "";
        wrongtext.textContent= "Wrong guesses: ";
        livestext.textContent = "Lives Left 6";
        Gamereset();
    }

       
   } else {
       console.log("you haven't won the game yet")
   }
   
}
console.log("has user won game? " + Gamehasbeenwon);

GameWinFunction()


}




}











