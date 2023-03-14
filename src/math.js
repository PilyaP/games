// Генерация случайного целого числа в диапазоне от min до max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация случайного математического выражения
function generateExpression() {
  var x = getRandomInt(1, 10);
  var y = getRandomInt(1, 10);
  var operator = getRandomInt(1, 3); // 1 - "+", 2 - "-", 3 - "="
  var expression;

  switch (operator) {
    case 1:
      expression = x + " + " + y;
      break;
    case 2:
      expression = x + " - " + y;
      break;
    case 3:
      expression = x + " = " + (x - y);
      break;
  }

  return expression;
}

// Обновление счета игрока и генерация нового математического выражения
function updateScoreAndProblem(correct) {
  var scoreEl = document.getElementById("score");
  var problemEl = document.getElementById("problem");
  var score = parseInt(scoreEl.innerText.split(" ")[2]);
  var newScore = correct ? score + 1 : score;

  scoreEl.innerText = "Ваш счет: " + newScore + " баллов";
  problemEl.innerText = generateExpression();
}

// Инициализация приложения
function init() {
  var answerForm = document.getElementById("answer-form");
  var answerInput = document.getElementById("answer-input");
  var submitButton = document.getElementById("submit-button");
  var operatorEl = document.getElementById("operator");

  // Генерация первого математического выражения
  var problemEl = document.getElementById("problem");
  problemEl.innerText = generateExpression();

  // Обновление формы в зависимости от оператора
  function updateForm(operator) {
    switch (operator) {
      case "+":
        operatorEl.innerText = "+";
        answerInput.setAttribute("type", "number");
        break;
      case "-":
        operatorEl.innerText = "-";
        answerInput.setAttribute("type", "number");
        break;
      case "=":
        operatorEl.innerText = "=";
        answerInput.setAttribute("type", "number");
        break;
      case "<":
        operatorEl.innerText = "<";
        answerInput.setAttribute("type", "number");
        break;
      case ">":
        operatorEl.innerText = ">";
        answerInput.setAttribute("type", "number");
        break;
    }
  }

  var problem = problemEl.innerText;
  var parts = problem.split(" ");
  var operator = parts[1];
  updateForm(operator);
// Запуск приложения после полной загрузки страницы
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
