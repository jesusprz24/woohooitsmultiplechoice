const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainterElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex

var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 60;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
}
document.getElementById("timerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit - 1;
}

function myStopFunction() {
    clearInterval(maVar);
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion() 
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainterElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {                                               //This resets the page back to the start button
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)                          //This finds out if the answer is correct or wrong
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)              //checks button and data set to see if it's correct
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {     //This sees if there is anymore questions and if so it goes onto the next question
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'                           //this allows the user to restart if needed
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if  (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'What is Javascript?',
        answers: [
            {text: 'A Russian language', correct: false},
            {text: 'A banana', correct: true},
            {text: 'A language that activates HTML and CSS', correct: false},
            {text: 'A lollipop', correct: false},

        ]
    },

    {
        question: 'Which can be used for styling HTML?',
        answers: [
            {text: 'CSS', correct: true},
            {text: 'HTML', correct: false},
            {text: 'An avocado', correct: false},
            {text: 'Sparkles', correct: false},

        ]
    },

    {
        question: 'Is coding fun?',
        answers: [
            {text: 'NO', correct: false},
            {text: 'Not at all', correct: false},
            {text: 'Not even a little', correct: false},
            {text: 'YES!', correct: true},

        ]
    },

    {
        question: 'What symbols are used to make a single line comment in Javascript?',
        answers: [
            {text: '<!-- -->', correct: false},
            {text: '/**/', correct: true},
            {text: '//', correct: false},
            {text: '&&', correct: false},

        ]
    },
]
 
function showProgress() {
    var currentQuestionsIndex = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionsIndex + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Scores</h1>";
    gameOverHTML += "<h2 id='score> Your score: " + quiz.score + "</h2";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var quiz = new Quiz(questions);





