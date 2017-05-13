$(document).ready(function(){

  var questionsandAnswers = [{
	  question: "what year did the diamondbacks have their inargural season?",
      ans1: "1997",
      ans2: "1998",
      ans3: "2003",
      ans4: "2002",
  },
    {
    question: "Who was the original manager of the Diamondbacks?",
      ans1: "Buck Showalter",
      ans2: "Show Buckwalter",
      ans3: "Bob Brenly",
      ans4: "Tony Luvello",
  },
    {
    question: "What year did the Diamondbacks win the world series?",
      ans1: "1999",
      ans2: "2001",
      ans3: "2000",
      ans4: "2002",
  },
    {
    question: "What batter hit the game winning hit in that World Series?",
      ans1: "Luis Gonzalez",
      ans2: "Jay Bell",
      ans3: "Mark Grace",
      ans4: "Matt Williams",
  },
    {
    question: "What are the original colors of the Diamondbacks?",
      ans1: "Green and Red",
      ans2: "Red and Gold",
      ans3: "Purple and Teal",
      ans4: "Pink and Glitter",
  }],

  var correctAnswer = ["1998","Buck Showalter","2001","Luis Gonzalez","Purple and Teal",],
  var selections = [];
  var questions = $("#questions");

  var timer: 20,

  var numberCorrect: 0,
  var numberIncorrect: 0,
  var numberUnanswered: 0,

function initialScreen() {
  quizArea = "<a class='btn startButton' href='#' role='button'>Start Quiz</a>";
  $("#quizArea").html(quizArea);
  $("#quizResults").hide()

}

initialScreen();


$("#startButton").on("click", function (event) {
	event.preventDefault();

  $(questionsandAnswers).html("<div")
































