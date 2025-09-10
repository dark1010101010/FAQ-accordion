import {questions} from "./data.js";

let questionsHTML = '';
questions.forEach((question) => {
  questionsHTML += `
    <div class="question">
      <div class="question-container js-first-question-container-${question.id} js-question-container"
       data-q-id="${question.id}">
        <p>${question.question}</p>
        <img class="js-icon-${question.id}" src="assets/images/icon-plus.svg" alt="plus-minus-icon">
      </div>

      <div class="answer js-answer-${question.id}">
        <p>${question.answer}</p>
      </div>
    </div>
  `;
});

  document.querySelector(`.questions-container`)
 .innerHTML = questionsHTML;


const firstQuestion = document.querySelector(`.js-first-question-container-id-1`);
firstQuestion.classList.add('first-question');

let openQuestionId;

document.querySelectorAll('.js-question-container')
 .forEach((question) => {

    question.addEventListener('click', () => {
      let qId = question.dataset.qId;
      let img = document.querySelector(`.js-icon-${qId}`);

      if (openQuestionId === qId) {
        document.querySelector(`.js-answer-${qId}`)
         .classList.remove('display-answer');
        setTimeout(() => {
          img.src = "assets/images/icon-plus.svg";
         }, 200);  
         
        openQuestionId = null;
      } 
      else if (openQuestionId && openQuestionId !== qId) {
        document.querySelector(`.js-answer-${openQuestionId}`)
         .classList.remove('display-answer');
        document.querySelector(`.js-icon-${openQuestionId}`)
        .src = "assets/images/icon-plus.svg";

        document.querySelector(`.js-answer-${qId}`)
         .classList.add('display-answer');
         setTimeout(() => {
          img.src = "assets/images/icon-minus.svg";
         }, 200);
         
      openQuestionId = qId;  
      } 
      else {
        document.querySelector(`.js-answer-${qId}`)
         .classList.add('display-answer');
         setTimeout(() => {
          img.src = "assets/images/icon-minus.svg";
         }, 200); 
         
      openQuestionId = qId;
      }

      console.log(openQuestionId);
  });
 });