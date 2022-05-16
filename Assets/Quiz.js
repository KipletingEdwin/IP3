// storing the right values in this object
var correctAnswers = {
  question1 : "HTML",
  question2 : "ECMAscript",
  question3 : "Images",
  question4 : "script",
  question5 : "For"
};
//  we should capture the data  when the users submits the answers.
let form = document.getElementById("form");
//Originally the score is Zero before beginning the quiz.
var score = 0;

form.addEventListener ("submit", function (event) { 
  
  event.preventDefault();
  var userAnswers = new FormData(form);   //userData is that submitted data.
  getData(userAnswers);
})

// getting the user data and calculating the score after the user has submitted the answers.
function getData(userAnswers) {
  var question1 = userAnswers.get("question1");
  var question2 = userAnswers.get("question2");
  var question3 = userAnswers.get("question3");
  var question4 = userAnswers.get("question4");
  var question5 = userAnswers.get("question5");

   
  if (question1 == correctAnswers["question1"]){
    score +=20;  // Adds the score by value of 20 points.
  } 
  if (question2 == correctAnswers["question2"]) {
    score += 20;  // Adds the score by value of 20 points.
  } 
  if (question3 == correctAnswers["question3"]) {
    score += 20;  // Adds the score by value of 20 points.
  } 
  if (question4 == correctAnswers["question4"]) {
    score += 20;  // Adds the score by value of 20 points.
  } 
  if (question5 == correctAnswers["question5"]) {
    score += 20;  // Adds the score by value of 20 points.
  } 
  // User results being printed on the screen.
  let userScore = document.getElementsByClassName(".score");
    // userScore.textContent = 'You Scored :'+ '' + score; 
    document.write ("Your score is:  " + '' + score);

    if(score >= 80) {
      document.write("Congratulations, You've Excellently passed. ");
    }else if
      (score >= 50 && score < 80){
      document.write("Good Work, You have Fairly passed. ");
    }else {
        document.write( "You have to retake the quiz");
      }
    var delayInMilliseconds = 7000; //7 seconds
    setTimeout(function() {
      //Clearing of form fields after some seconds
      window.location.reload();
    }, delayInMilliseconds);
}