const quizData[
    {
        question:"What is the shortform of HTML?",
        a:"HTML",
        b:"HMLT",
        c:"HLHT",
        correct:"a",
    },
    {
        question:"What is the other name of Javascript?",
        a:"ECMascript",
        b:"JS",
        C:"I dont know",
        correct:"a",
    },
    {
        question:"Is C++ a low level language?",
        a:"Yes",
        b:"No",
        c:"Not Sure",
    }
];

const quiz=document.getElementById('quiz')
const answerEIs=document.jquerySelectorAll('.answer')
const questionEL=document.getElementById('question')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizdata=quizData[currentQiuz]

    questionE1.innerText=currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c

}

function deselectAnswers(){
    answerEIs..forEach(answerEIs => answerEIs.checked=false)
        
    }
    function getSelected({
        let answerEIs
        answerEIs.forEach(answerEI)=>{
            if (answerEI.checked){
                answer = answerEI.id
            }
        }
    })
    return answer
    submitBtn.addEventListener('click',()=>){
        const answer=getSelected()
        if(answer){
            if(answer) ===quizData={currentQuiz}.correct){

            }
            currentQuiz++

            if(currentQuiz<quizData.lenght){
                loadQuiz()
            } else{
                quiz.innerHTML
            }
        }
    }

