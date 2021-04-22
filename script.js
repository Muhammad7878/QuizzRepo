"use strict"

const questionElement = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const rButtons = document.querySelectorAll(".answer");


const quizData = [
  {
    question: "How old am I?",
    a: 5,
    b: 27,
    c: 43,
    d: 32,
    correct: "b"
  },
  {
    question:"What is the most used programming language in 2019",
    a:"Java",
    b:"C",
    c:"Scala",
    d:"JavaScript",
    correct:"a"
  },
  {
    question:"Who is the President of USA",
    a:"Me",
    b:"Barak Obama",
    c:"Jenifer Aniston",
    d:"Brad Pitt",
    correct:"b"
  },
  {
    question:"What does HTML stands for",
    a:"Hypertext Markup Language",
    b:"Harry Torter Making love",
    c:"How to make love",
    d:"How to moan louder",
    correct:"a"
  },
  {
    question:"What year was JavaScript launched",
    a:"2019",
    b:"2000",
    c:"1995",
    d:"none of above",
    correct:"d",
  },
];

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function checkSelected (){
  for (var button of rButtons) {
    if(button.checked){
      return button.id;
    }
  }
  return undefined;

}

function deselectAnswers(){
  for (var button of rButtons) {
    button.checked =false;
  }

}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = checkSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
            submitBtn.classList.add("no-button");
        }
    }


})
