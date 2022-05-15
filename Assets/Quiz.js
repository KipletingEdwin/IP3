
var correctAnswers={
    question1 :"HTML"
    question2 :"ECMAscript"
    question3 :"Yes"
    question4 :"Script"
    question5 :"for"
};

let form=document.getElementById("form")

var score=0;

form.addEventListener("submit",function (event)){
    
    event.preventDefault();

    var userAnswers=newFormData(form);
    getData(userAnswers);
}


function getData(userAnswers){
    var question1 = userAnswers.get("question1");
    var question2 = userAnswers.get("question2");
    var question3 = userAnswers.get("question3");
    var question4 = userAnswers.get("question4");
    var question5 = userAnswers.get("question5");


    if (question1 == correctAnswers["question1"]){
    score +=20;
    }
    if (question2 == correctAnswers["question2"]){
        score +=20;
    }
    if (question3 == correctAnswers["question3"]){
        score +=20;
    }
    if (question4 == correctAnswers["question4"]){
        score +=20;
    }
    if (question5 == correctAnswers["question5"]){
      score +=20;
    }

    //results printed on screen//
    
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

        var delayInMilliseconds=7000;
        window.location.reload();
    }delayInMilliseconds);
