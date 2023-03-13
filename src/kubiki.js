var score = 0;
var maxNumber = 10;
var correctAnswer;

window.onload = function() {
  generateQuestion();
}

function generateQuestion() {
  var operand1 = Math.floor(Math.random() * maxNumber) + 1;
  var operand2 = Math.floor(Math.random() * maxNumber) + 1;
  var operator = Math.floor(Math.random() * 3);
  var operatorString;

  switch (operator) {
    case 0:
      operatorString = "+";
      correctAnswer = operand1 + operand2;
      break;
    case 1:
      operatorString = "-";
      correctAnswer = operand1 - operand2;
      break;
    case 2:
      operatorString = "*";
      correctAnswer = operand1 * operand2;
      break;
  }

  var questionString = operand1 + " " + operatorString + " " + operand2 + " = ?";
  document.getElementById("question").innerHTML = questionString;
}

function checkAnswer() {
  var userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("score").innerHTML = score;
  }
  generateQuestion();
}
