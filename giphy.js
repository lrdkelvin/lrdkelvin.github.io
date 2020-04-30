var beginurl = "https://api.giphy.com/v1/gifs/search?q="
var endurl = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"
var playing0 = true;
var playing1 = true;
var playing2 = true;
var playing3 = true;
var playing4 = true;
var playing5 = true;
var playing6 = true;
var playing7 = true;
var playing8 = true;
var playing9 = true;
var playing10 = true;
var playing11 = true;


searchTerm = "";

var queryURL = "&limit=10";

function removeDivs() {
    $("#images").html("");
};



function postPictures() {
removeDivs();

$.ajax({
  url: (beginurl + searchTerm + endurl),
  method: "GET"
}).then(function(response) {

  var imageNumber = "";

  for (var i=0; i < 12; i++) {
    function createimg() {
        $("#images").append("<div class= 'container-box' id ='container" + i + "'" + ">");
        
        $("#img" + i).attr("id", i)
    }

    createimg();

    //container creates ratings tag inside it
    $("#container" +i).append("<div class= 'container-sm rounded-sm ratings'> rating: " + response.data[i].rating )
    //container creats img tags inside it
    $("#container" +i).append("<img id = 'image" + i + "'" + "class = 'images rounded-lg'" + ">")

    $("#image" + i).attr("src", response.data[i].images.original_still.url);
   
    $("#image" + i).attr("width", "150");
    $("#image" + i).attr("height", "150");
    
    console.log("yes");
    
  }

  $("#image0").on("click", function() {
    
    if (playing0 === true) {
$("#image0").attr("src", response.data[0].images.preview_gif.url);
console.log( "you clicked it!");
playing0 = false;
    } else { 
        $("#image0").attr("src", response.data[0].images.original_still.url);
        playing0 = true;
        console.log("it's not playing anymore")
        

    }


});

  $("#image1").on("click", function() {
    
    if (playing1 === true) {
$("#image1").attr("src", response.data[1].images.preview_gif.url);
console.log( "you clicked it!");
playing1 = false;
    } else { 
        $("#image1").attr("src", response.data[1].images.original_still.url);
        playing1 = true;
        console.log("it's not playing anymore")
        

    }


});



$("#image2").on("click", function() {
    
    if (playing2 === true) {
$("#image2").attr("src", response.data[2].images.preview_gif.url);
console.log( "you clicked it!");
playing2 = false;
    } else { 
        $("#image2").attr("src", response.data[2].images.original_still.url);
        playing2 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image3").on("click", function() {
    
    if (playing3 === true) {
$("#image3").attr("src", response.data[3].images.preview_gif.url);
console.log( "you clicked it!");
playing3 = false;
    } else { 
        $("#image3").attr("src", response.data[3].images.original_still.url);
        playing3 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image4").on("click", function() {
    
    if (playing4 === true) {
$("#image4").attr("src", response.data[4].images.preview_gif.url);
console.log( "you clicked it!");
playing4 = false;
    } else { 
        $("#image4").attr("src", response.data[4].images.original_still.url);
        playing4 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image5").on("click", function() {
    
    if (playing5 === true) {
$("#image5").attr("src", response.data[5].images.preview_gif.url);
console.log( "you clicked it!");
playing5 = false;
    } else { 
        $("#image5").attr("src", response.data[5].images.original_still.url);
        playing5 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image6").on("click", function() {
    
    if (playing6 === true) {
$("#image6").attr("src", response.data[6].images.preview_gif.url);
console.log( "you clicked it!");
playing6 = false;
    } else { 
        $("#image6").attr("src", response.data[6].images.original_still.url);
        playing6 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image7").on("click", function() {
    
    if (playing7 === true) {
$("#image7").attr("src", response.data[7].images.preview_gif.url);
console.log( "you clicked it!");
playing7 = false;
    } else { 
        $("#image7").attr("src", response.data[7].images.original_still.url);
        playing7 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image8").on("click", function() {
    
    if (playing8 === true) {
$("#image8").attr("src", response.data[8].images.preview_gif.url);
console.log( "you clicked it!");
playing8 = false;
    } else { 
        $("#image8").attr("src", response.data[8].images.original_still.url);
        playing8 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image9").on("click", function() {
    
        if (playing9 === true) {
    $("#image9").attr("src", response.data[9].images.preview_gif.url);
    console.log( "you clicked it!");
    playing9 = false;
        } else { 
            $("#image9").attr("src", response.data[9].images.original_still.url);
            playing9 = true;
            console.log("it's not playing anymore")
            

        }

    
});

$("#image10").on("click", function() {
    
    if (playing10 === true) {
$("#image10").attr("src", response.data[10].images.preview_gif.url);
console.log( "you clicked it!");
playing10 = false;
    } else { 
        $("#image10").attr("src", response.data[10].images.original_still.url);
        playing10 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image11").on("click", function() {
    
    if (playing11 === true) {
$("#image11").attr("src", response.data[11].images.preview_gif.url);
console.log( "you clicked it!");
playing11 = false;
    } else { 
        $("#image11").attr("src", response.data[11].images.original_still.url);
        playing11 = true;
        console.log("it's not playing anymore")
        

    }


});




 
});

}//end function postpictures







var topics = ["dogs", "cats", "horses", "funny", "wolves", "stubborn", "celebrity", "dragon", "monster"];


for (var a = 0; a<topics.length; a++) {
    function buttongenerator() {
        $("#buttons").append("<button id = 'button" + a + "' " + "class = 'btn btn-success' onClick='reply_click(this.id)'>")
    }
    buttongenerator();

    $("#button" + a).html(topics[a]);
}

$("#submitButton").on("click", function () {
    console.log("you clicked me!");
   var userInput = $("input:text").val();

   if (userInput !== "" && topics.includes(userInput) !== true) {
       console.log("user input is" + topics.includes(userInput));
   topics.push(userInput) ;
   console.log("user typed " +userInput);
   console.log("topics are " +topics);
   buttongenerator();
   postPictures();
   
   $("#button" + a).html(userInput);
   a++
   } else {
       console.log("please enter a valid input")
    }
})

function reply_click(clicked_id)
  {
     searchTerm = $("#" + clicked_id).html();
     postPictures();
  }












