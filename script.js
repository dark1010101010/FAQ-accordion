import {questions} from "./data.js";

let questionsHTML = '';

questions.forEach((question) => {
  questionsHTML += `
    <div class="question">
      <div class="question-container js-first-question-container-${question.id} js-question-container"
       data-q-id="${question.id}">
        <p>${question.question}</p>
        <img src="assets/images/icon-plus.svg" alt="plus-minus-icon">
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

document.querySelectorAll('.js-question-container')
 .forEach((question) => {
    let userClicked = false;
    question.addEventListener('click', () => {
      let qId = question.dataset.qId;
      console.log(qId);
      
      if (!userClicked) {
      document.querySelector(`.js-answer-${qId}`)
      .classList.add('display-answer');
      userClicked = true;
      } else if (userClicked === true) {
      document.querySelector(`.js-answer-${qId}`)
      .classList.remove('display-answer');  
      userClicked = false;
      };

  });
 });