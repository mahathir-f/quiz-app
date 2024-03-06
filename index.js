const Question = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue wale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which currency is the strongest currency in the world?",
    answer: [
      { text: "Euro ", correct: false },
      { text: "Euro ", correct: false },
      { text: "Kuwaiti Dinar", correct: true },
      { text: "Gibraltar Pound", correct: false },
    ],
  },
  {
    question: "Which counntry is the smallest in the world?",
    answer: [
      { text: "Vatican city ", correct: true },
      { text: "Bangladesh ", correct: false },
      { text: "Japan", correct: false },
      { text: "Morocco", correct: false },
    ],
  },
  {
    question: "Which counntry is the biggest in the world?",
    answer: [
      { text: "Vatican city ", correct: false },
      { text: "Bangladesh ", correct: false },
      { text: "Japan", correct: false },
      { text: "Russia", correct: true },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function quizStart() {
  currentQuestionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "next";
  showQuiz();
}
function showQuiz() {
    reStart() 
  let currentQuestion = Question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo+". "+currentQuestion.
  question;
  currentQuestion.answer.forEach(answer =>{
    let button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('answer');
    answerbuttons.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)
  });
}
function  reStart(){
    nextbtn.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
} 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCurrect = selectedBtn.dataset.correct === "true";
    if (isCurrect) {
        selectedBtn.classList.add('currect');
        score++;
    }else{
        selectedBtn.classList.add('incurrect');
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if (button.dataset.correct === 'true') {
            button.classList.add('currect');
        }
        button.disabled = true;
    });
    nextbtn.style.display = 'block';

};
function showScore(){
    reStart();
    questionElement.innerHTML =`You score ${score} out of ${Question.length}!`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display ='block'
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < Question.length) {
        showQuiz();
    }else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if (currentQuestionIndex < Question.length) {
        handleNextButton();
    }else{
        quizStart();
    }
})
quizStart();
