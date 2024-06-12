const quizForm = document.getElementById("quiz-form");

const score = document.getElementById("score");
const correctAnswer = [3, 1, 3, 1, 2];
let selectedAnswersValues = [];
let totalScore = 0;

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  totalScore = 0;
  const questions = quizForm.querySelectorAll("div");
  // const questions = ["div", "div", "div", "div", "div"];
  // const numbers = [1, 2, 3, 4, 5, 6];
  // numbers.forEach((number) => {
  //   console.log(number);
  // });
  console.log(questions);

  questions.forEach((question) => {
    const selectedAnswer = question.querySelector(
      "input[type='radio']:checked"
    );
    selectedAnswersValues.push(selectedAnswer.value);
    // console.log(`element ${selectedAnswer.value} index ${index}`);
  });
  console.log(selectedAnswersValues);

  for (let i = 0; i < correctAnswer.length; i++) {
    if (selectedAnswersValues[i] == correctAnswer[i]) {
      totalScore++;
    }
  }

  const radioBtn = quizForm.querySelectorAll("input[type='radio']");
  radioBtn.forEach((radio) => {
    radio.checked = false;
  });
  score.textContent = `You scored ${totalScore}`;
  alert(totalScore);
});
