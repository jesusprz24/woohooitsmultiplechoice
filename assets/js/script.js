const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainterElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex

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


//Questions not working? Ask instructor is there's a different way to write it
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
        question: 'Which can be used for styling HTML',
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
 





