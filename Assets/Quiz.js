

var correctAnswers = {
    question1 : "1",
    question2 : "Class",
    question3 : "1995",
    question4 : "script",
    question5 : "For"
  };
   

  let form = document.getElementById("form");
  

  var score = 0;
  
  form.addEventListener ("submit", function (event) { 
    

    event.preventDefault();
    var userAnswers = new FormData(form);   
    getData(userAnswers);
  })
  
  

  function getData(userAnswers) {
    var question1 = userAnswers.get("question1");
    var question2 = userAnswers.get("question2");
    var question3 = userAnswers.get("question3");
    var question4 = userAnswers.get("question4");
    var question5 = userAnswers.get("question5");
  
     
    if (question1 == correctAnswers["question1"]){
      score +=20;  
    } 
    if (question2 == correctAnswers["question2"]) {
      score += 20;  
    } 
    if (question3 == correctAnswers["question3"]) {
      score += 20;  
    } 
    if (question4 == correctAnswers["question4"]) {
      score += 20;  
    } 
    if (question5 == correctAnswers["question5"]) {
      score += 20;  
    } 
    
    let userScore = document.getElementsByClassName(".score");
       
      document.write ("Your score is:  " + '' + score);
  
      if(score >= 80) {
        document.write("Congratulations, You've Excellently passed. ");
      }else if
        (score >= 50 && score < 80){
        document.write("Good Work, You have Fairly passed. ");
      }else {
          document.write( "You have to retake the quiz");
        }
      var delayInMilliseconds = 7000; 
      setTimeout(function() {
        
        
        window.location.reload();
      }, delayInMilliseconds);
  }