$(document).ready(function(){
var magic8ball = {};
magic8ball.answerList = ["Yes", "No", "Maybe Someday", "Try Again Later", "Certainly", "Probably Not"];
$("#answer").hide();

magic8ball.askQuestion = function(question) {
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.answerList.length;
var randomIndex = Math.floor(randomNumberArray);
var answer = this.answerList[randomIndex];
	$("#answer").text(answer);
console.log(question);
console.log(answer);
};

var onClick = function() {
	$("#answer").hide();	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#8ball").effect("shake");
	setTimeout(
		function() {
		var question = prompt("Ask Me Anything! (yes/no only of course)");
		magic8ball.askQuestion();
		}, 500);
};

$("#questionButton").click(onClick);

});
