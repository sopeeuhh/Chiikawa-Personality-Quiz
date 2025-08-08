/*Add your JavaScript here*/
var chiikawaScore = 0;
var hachiwareScore = 0;
var usagiScore = 0;

var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

// ADD EVENT LISTENER TO EACH BUTTON
q1a1.addEventListener("click", function() {
  hachiware();
  disableQuestionButtons(q1a1);
});
q1a2.addEventListener("click", function() {
  usagi();
  disableQuestionButtons(q1a2);
});
q1a3.addEventListener("click", function() {
  chiikawa();
  disableQuestionButtons(q1a3);
});

q2a1.addEventListener("click", function() {
  usagi();
  disableQuestionButtons(q2a1);
});
q2a2.addEventListener("click", function() {
  chiikawa();
  disableQuestionButtons(q2a2);
});
q2a3.addEventListener("click", function() {
  hachiware();
  disableQuestionButtons(q2a3);
});

q3a1.addEventListener("click", function() {
  chiikawa();
  disableQuestionButtons(q3a1);
});
q3a2.addEventListener("click", function() {
  usagi();
  disableQuestionButtons(q3a2);
});
q3a3.addEventListener("click", function() {
  hachiware();
  disableQuestionButtons(q3a3);
});

q4a1.addEventListener("click", function() {
  usagi();
  disableQuestionButtons(q4a1);
});
q4a2.addEventListener("click", function() {
  chiikawa();
  disableQuestionButtons(q4a2);
});
q4a3.addEventListener("click", function() {
  hachiware();
  disableQuestionButtons(q4a3);
});

q5a1.addEventListener("click", function() {
  chiikawa();
  disableQuestionButtons(q5a1);
});
q5a2.addEventListener("click", function() {
  usagi();
  disableQuestionButtons(q3a2);
});
q5a3.addEventListener("click", function() {
  hachiware();
  disableQuestionButtons(q5a3);
});


function chiikawa() {
  chiikawaScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "chiikawaScore = " + chiikawaScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function hachiware() {
hachiwareScore +=1;
questionCount += 1;

console.log("questionCount = " + questionCount + "hachiwareScore = " + hachiwareScore);

if(questionCount == 5) {
  console.log("The quiz is done!");
  updateResult();
}
}

function usagi() {
  usagiScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "usagiScore = " + usagiScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function disableQuestionButtons(clickedButton) {
  
// DETERMINE WHICH QUESTION THE BUTTON BELONGS TO
  var buttonId = clickedButton.id;
  var questionNumber = buttonId.charAt(1);

//GET ALL BUTTONS FOR THIS QUESTION  
  var q1Buttons = [q1a1, q1a2, q1a3];
  var q2Buttons = [q2a1, q2a2, q2a3];
  var q3Buttons = [q3a1, q3a2, q3a3];
  var q4Buttons = [q4a1, q4a2, q4a3];
  var q5Buttons = [q5a1, q5a2, q5a3];

  var buttonsToDisable = [];
  if (questionNumber === '1') {
    buttonsToDisable = q1Buttons;
  } else if (questionNumber === '2') {
    buttonsToDisable = q2Buttons;
  } else if (questionNumber === '3') {
    buttonsToDisable = q3Buttons;
  } else if (questionNumber === '4') {
      buttonsToDisable = q4Buttons;
  } else if (questionNumber === '5') {
      buttonsToDisable = q5Buttons;
  }

  // DISABLES BUTTONS EXCEPT THE ONE THAT WAS CLICKED
  buttonsToDisable.forEach(function(button) {
    if (button !== clickedButton) {
      button.disabled = true;
    }
  });
}

function updateResult() {
  var result = document.getElementById("result");

  if(chiikawaScore >= hachiwareScore && chiikawaScore >= usagiScore) {
    result.innerHTML = "You are Chiikawa! ✧˖°";
    console.log ("You are Chiikawa! ✧˖°");
  }
  else if(hachiwareScore >= chiikawaScore && hachiwareScore >= usagiScore) {
    result.innerHTML = "You are Hachiware! ♬⋆.˚";
    console.log ("You are Hachiware! ♬⋆.˚");
  }
  else {
    result.innerHTML = "You are Usagi! ₍ᐢ. .ᐢ₎";
    console.log ("You are Usagi! ₍ᐢ. .ᐢ₎");
  }

  // SHOW RESET BUTTON
  resetButton.style.display = "inline-block";


  // DISABLES BUTTONS WHEN OPTION IS CHOSEN
  var buttons = [q1a1, q1a2, q1a3, q2a1, q2a2, q2a3, q3a1, q3a2, q3a3, q4a1, q4a2, q4a3, q5a1, q5a2, q5a3];
  buttons.forEach(function(button) {
    button.disabled = true;
  });
}

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {
  chiikawaScore = 0;
  hachiwareScore = 0;
  usagiScore = 0;
  questionCount = 0;

  // RESET RESULT TEXT
  document.getElementById("result").innerHTML = "Your result is...";


  //RE-ENABLE BUTTONS
  var buttons= [q1a1, q1a2, q1a3, q2a1, q2a2, q2a3, q3a1, q3a2, q3a3, q4a1, q4a2, q4a3, q5a1, q5a2, q5a3];
  buttons.forEach(function(button) {
    button.disabled = false;
  });
  
  console.log("Quiz has been reset!");
}

