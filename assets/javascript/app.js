var answeredCorrectly = 0;
var answeredIncorrectly = 0;

$(document).ready(function(){
    $("#start-button").click(function(){
  // ----------------------------------------------------------------
   // declaring the value for the timer to 50 seconds
   // hide the start button and rules
        var number = 50;

      $("#start-button").on("click", start);  // starts the games 
      $("#submit").on("click", finish);  // submits answers and finishes the game
      $("#restart").on("click", restart);  // restarts the games 
  // ----------------------------------------------------------------



// functions
      function start(){
          initAudioPlayer()
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
          hideMe("#start-button");
          hideMe(".rules");
          hideMe("#restart");
          hideMe("#results");

          var audio, playbtn;
          function initAudioPlayer(){
            audio = new Audio ();
            audio.src = "assets/audio/hp-theme.mp3";
            audio.loop = true;
            audio.play();
            // set object references
            playbtn = document.getElementById("")
          }
          window.addEventListener("load", initAudioPlayer)
        
      }

      
      //timer starts
      function timer(){
          
        number-- // decrements the timer by 1
        $("#show-number").html("<h2>" + number +  " " + "Seconds Left"+ "</h2>" );
        if (number === 0){
            stop(); // calls the stop function
            alert("Times Up!")
        }
        
      }

      // stops the timer
      function stop(){
        clearInterval(counter); 
        $("#results").show();
        $("#restart").show();
        $(".question").hide();
        $(".answers").hide();
        $("#submit").hide();
      }

      function finish(){
          number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
          clearInterval(counter); // stops the timer
          timer();
          
          Audio.pause(initAudioPlayer);

      }
  
      function restart(){
          number = 50;
          start();
          answeredCorrectly = 0;
          answeredIncorrectly = 0;

          $(".win-count").text(answeredCorrectly);
          $(".lose-count").text(answeredIncorrectly);
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
  
  // ----------------------------------------------------------------
  //calling functions
        start(); // calls the start function
    });
  });

  
  //function to loop through the answers for each question and check which radio button is selected
  //compare the selective radio button with the collect answer
  //if the user guesses correctly add one point to the user score, global var to contain the score and show the correct answer
  //if the user guesses incorrectly add one point to the losses score, global var to contain the score and show the wrong answer
  
  $("#submit").click(function(){
    $(".question").each(function(){
        // console.log(this);
    
        var correctAnswer = $(this).attr("correct-answer");
        console.log(correctAnswer);


    var currentListId = $(this).children("ul").attr("id");
    console.log(currentListId);
    currentListId = "#" + currentListId;

    $(currentListId).children("input").each(function(){
        console.log(this);

    var radioChecked = $(this).prop('checked');    
    console.log(radioChecked);

    if (radioChecked) {
       var userAnswer = $(this).attr("value");
        
       if (userAnswer === correctAnswer){
        answeredCorrectly++;

       }else {
        answeredIncorrectly++;

       }
       console.log(answeredCorrectly);
       console.log(answeredIncorrectly);

       $(".win-count").text(answeredCorrectly);
       $(".lose-count").text(answeredIncorrectly);
    }


    

        });
    });
});
  
  
  