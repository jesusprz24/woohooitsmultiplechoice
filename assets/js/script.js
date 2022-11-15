var questions = [
    {questions: "What is my favorite color?",
    answer: "blue",
    choices: ["blue", "green", "orange"];
},
{
    question: "fav number",
    answer: "21",
    choices: {"11", "22"}

}
]

var timerContent = document.getElementById)=('timer');

function countDown(){
    var timeleft = 20;
    var timeInterval = setInterval(function () {
        timeleft--;
        timeCountent.textContent = 'Time Remaining: ' + timeleft;
    }, 1000);
    return;
}
countDown();