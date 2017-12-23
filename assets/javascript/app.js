var answeredCorrectly = 0;
var answeredIncorrectly = 0;
// ----------------------------------------------------------------

$(document).ready(function(){
    $("#start-button").click(function(){

    $(".q1").prop('checked', false);
    $(".q2").prop('checked', false);
    $(".q3").prop('checked', false);
    $(".q4").prop('checked', false);
    $(".q5").prop('checked', false);
// ----------------------------------------------------------------

// declaring the value for the timer to 3 seconds
// hide the start button and rules
var number = 51;

    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts the games 
// ----------------------------------------------------------------

//audio
//   var audio, playbtn;

//   function initAudioPlayer(){
//     audio = new Audio ();
//     audio.src = "assets/audio/hp-theme.mp3";
//     audio.loop = true;
//     audio.play();
//     // set object references
//     playbtn = document.getElementById("")
//   }function initAudioStopper(){
//     audio = new Audio ();
//     audio.src = "assets/audio/hp-theme.mp3";
//     audio.loop = false;
//     audio.pause();
//     playbtn = document.getElementById("")
//   }

//   window.addEventListener("load", initAudioPlayer)
// ----------------------------------------------------------------

// functions
//the game starts here. Starting the timer and hiding the rules page and showing the Q&A's 
function start(){
    
    // initAudioPlayer();
    counter = setInterval(timer, 1000);
    showMe("#show-number");
    showMe(".question");
    showMe(".answers");
    showMe("#submit");
    hideMe("#start-button");
    hideMe(".rules");
    hideMe("#restart");
    hideMe("#results");

    }
// ----------------------------------------------------------------
 
//timer starts
function timer(){
number-- // decrements the timer by 1 sec
$("#show-number").html("<h2>" + number +  " " + "Seconds Left"+ "</h2>" );

    if (number === 0){
        alert("Times Up!");
        checkAnswers();
        stop(); // calls the stop function
        }
}
// ----------------------------------------------------------------

// stops the timer
function stop(){

    clearInterval(counter); 
    $("#results").show();
    $("#restart").show();
    $(".question").hide();
    $(".answers").hide();
    $("#submit").hide();
    $("#show-number").hide();

    $(".win-count").text(answeredCorrectly);
    $(".lose-count").text(answeredIncorrectly);
}
// ----------------------------------------------------------------

//time is over
function finish(){
    number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    clearInterval(counter); // stops the timer

    checkAnswers();
    $(".win-count").text(answeredCorrectly);
    $(".lose-count").text(answeredIncorrectly);

    stop(); //run stop
}
// ----------------------------------------------------------------

//play again
function restart(){
    number = 51;
    start();
    answeredCorrectly = 0; //reset correct score
    answeredIncorrectly = 0; //reset incorrect score

    $(".q1").prop('checked', false);
    $(".q2").prop('checked', false);
    $(".q3").prop('checked', false);
    $(".q4").prop('checked', false);
    $(".q5").prop('checked', false);

    $(".win-count").text(answeredCorrectly);
    $(".lose-count").text(answeredIncorrectly);
}
// ----------------------------------------------------------------

function hideMe(e) {
    $(e).hide();
}

function showMe(e) {
    $(e).show();
}
// ----------------------------------------------------------------

//calling functions
//function to loop through the answers for each question and check which radio button is selected
function checkAnswers() {

    $(".question").each(function(){
    console.log(this);

//compare the selective radio button with the collect answer
var correctAnswer = $(this).attr("correct-answer");
    console.log(correctAnswer);


var currentListId = $(this).children("ul").attr("id");
    console.log(currentListId);

    currentListId = "#" + currentListId;


var userAnswer = "";

    $(currentListId).children("input").each(function(){
    console.log(this);

var radioChecked = $(this).prop('checked');    
    console.log(radioChecked);

    if(radioChecked){
        userAnswer = $(this).attr("value");

    }

});

        if(userAnswer) {
        answeredCorrectly++;

        } else{
        answeredIncorrectly++;

        }

    });
};
// ----------------------------------------------------------------
    
start(); // calls the start function

    });
});

// ------------------------------LA FIN----------------------------