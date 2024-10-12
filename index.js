//Question for the user
const quizData = [
    {
        question: "What is Node.js?",
        choices: ["A Java Script runtime environment", "A Java Script library", "A Java Script framework", "A Java Script package manager"],
        answer: "A Java Script runtime environment"
    },

    {
        Image: "image/code1.jpg",
        question: "What is the output of the above code?",
        choices: ["sync, setTimeout 1, promise 1, promise 2, setTimeout 2", "sync, promise 2, setTimeout 1, promise 1, setTimeout 2", "sync, setTimeout 1, promise 2, promise 1, setTimeout 2", "sync, promise 2, setTimeout 1, setTimeout 2, promise 1"],
        answer: "sync, promise 2, setTimeout 1, promise 1, setTimeout 2"
    },

    {
        question: "Which of these is not a core module in Node.js?",
        choices: ["fs", "http", "url", "path", "jQuery"],
        answer: "jQuery"
    },

    {
        Image: "image/code2.jpg",
        question: "What is the output of the above code?",
        choices: ["A, B, C, D", "A, D, B, C", "A, C, D, B", "A, D, C, B"],
        answer: "A, D, C, B"
    },

    {
        question: "What is the purpose of the require() function in Node.js?",
        choices: ["To include a module in the current file", "To create a new module", "To remove a module", "To update a module"],
        answer: "To include a module in the current file"
    },

    {
        Image: "image/code3.jpg",
        question: "What is the output of the above code?",
        choices: ["1, 5, 3, 2, 4", "1, 5, 3, 4, 2", "1, 5, 2, 3, 4", "1, 5, 4, 3, 2"],
        answer: "1, 5, 3, 4, 2"
    },

    {
        question: "How do you import a module in Node.js?",
        choices: ["import module from 'module_name'", "require('module_name')", "import 'module_name'", "require module from 'module_name'"],
        answer: "require('module_name')"
    },

    {
        Image: "image/code4.jpg",
        question: "What is the output of the above code?",
        choices: ["Fetching..., End of script, Process completed, Data fetched", "Data fetched, Fetching..., End of script, Process completed", "Fetching..., End of script, Process completed, Data fetched", "Fetching..., End of script, Data fetched, Process completed"],
        answer: "Fetching..., End of script, Data fetched, Process completed"
    },

    {
        question: "Which of the following is not a valid HTTP status code?",
        choices: ["200", "404", "500", "300", "403"],
        answer: "300"
    },

    {
        Image: "image/code5.jpg",
        question: "What is the output of the above code?",
        choices: ["1, 2, 3, undefined, 4", "1, 3, 4, undefined, undefined", "1, 2, 3, undefined, undefined", "1, 2, 3, 4, undefined"],
        answer: "1, 2, 3, 4, undefined"
    },

    {
        question: "What is the purpose of the fs module in Node.js?",
        choices: ["To create a new file", "To read and write files", "To delete a file", "To update a file"],
        answer: "To read and write files"
    },

    {
        Image: "image/code6.jpg",
        question: "What is the output of the above code?",
        choices: ["Script Start, Async Start, Timeout 1, Script End, Async End, Timeout 2", "Script Start, Async Start, Script End, Timeout 1, Async End, Timeout 2", "Script Start, Async Start, Script End, Timeout 1, Timeout 2, Async End", "Script Start, Async Start, Timeout 1, Timeout 2, Script End, Async End"],
        answer: "Script Start, Async Start, Script End, Timeout 1, Async End, Timeout 2"
    },

    {
        Image: "image/code7.jpg",
        question: "What is the output of the above code?",
        choices: ["100", "undefined", "Error", "0"],
        answer: "undefined"
    },

    {
        Image: "image/code8.jpg",
        question: "What is the output of the above code?",
        choices: ["Start, Hello, End, Outside", "Start, Outside, Hello, End", " Outside, Start, Hello, End", "Start, End, Hello, Outside"],
        answer: "Start, Outside, Hello, End"
    },

    {
        Image: "image/code9.jpg",
        question: "What is the output of the above code?",
        choices: ["5", "23", "NaN", "SyntaxError"],
        answer: "5"
    },

    {
        Image: "image/code10.jpg",
        question: "What is the output of the above code?",
        choices: ["Alice", "Bob", "Undefined", "Error"],
        answer: "Bob"
    },

    {
        Image: "image/code11.jpg",
        question: "What is the output of the above code?",
        choices: ["10", "20", "ReferenceError", "Undefined"],
        answer: "20"
    },

    {
        Image: "image/code12.jpg",
        question: "What is the output of the above code?",
        choices: ["1, 4, 3, 2", "1, 2, 3, 4", "4, 1, 3, 2", "2, 1, 4, 3"],
        answer: "1, 4, 3, 2"
    },

    {
        question: "Which of the following is true about Node.js event-driven architecture?",
        choices: ["It uses a single thread to handle multiple requests", "It uses multiple threads to handle multiple requests", "It uses a single thread to handle a single request", "It uses multiple threads to handle a single request"],
        answer: "It uses a single thread to handle multiple requests"
    },

    {
        question: "What is the purpose of the path module in Node.js?",
        choices: ["To create a new path", "To read and write paths", "To delete a path", "To update a path"],
        answer: "To read and write paths"
    },

    {
        question: "Which of the following is not a valid HTTP method?",
        choices: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
        answer: "UPDATE"
    },

    {
        question: "What is the purpose of the url module in Node.js?",
        choices: ["To create a new URL", "To read and write URLs", "To delete a URL", "To update a URL"],
        answer: "To read and write URLs"
    },

    {
        question: "Which of the following is true about the global object in Node.js?",
        choices: ["It is available in all modules", "It is available in the main module", "It is available in all modules except the main module", "It is not available in any module"],
        answer: "It is available in all modules"
    },

    {
        question: "What is the purpose of the querystring module in Node.js?",
        choices: ["To create a new query string", "To read and write query strings", "To delete a query string", "To update a query string"],
        answer: "To read and write query strings"
    },

    {
        question: "Which of the following is not a valid HTTP header?",
        choices: ["Content-Type", "Content-Length", "Content-Size", "Content-Encoding", "Content-Disposition"],
        answer: "Content-Size"
    },

    {
        question: "What is the purpose of the util module in Node.js?",
        choices: ["To create a new utility", "To read and write utilities", "To delete a utility", "To update a utility"],
        answer: "To create a new utility"
    },

    {
        question: "Which of the following is true about the buffer class in Node.js?",
        choices: ["It is used to handle binary data", "It is used to handle text data", "It is used to handle JSON data", "It is used to handle XML data"],
        answer: "It is used to handle binary data"
    },

    {
        question: "What is the purpose of the crypto module in Node.js?",
        choices: ["To create a new cryptographic algorithm", "To read and write cryptographic algorithms", "To delete a cryptographic algorithm", "To update a cryptographic algorithm"],
        answer: "To create a new cryptographic algorithm"
    },

    {
        question: "Which of the following is not a valid HTTP content type?",
        choices: ["text/html", "application/json", "application/xml", "application/javascript", "application/pdf"],
        answer: "application/pdf"
    },

    {
        question: "What is the purpose of the child_process module in Node.js?",
        choices: ["To create a new child process", "To read and write child processes", "To delete a child process", "To update a child process"],
        answer: "To create a new child process"
    },
];

let currentQuestionIndex = 0;
let numCorrect = 0;
let timerInterval;
const timeLimit = 30; // Time limit in seconds for each question

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const welcomeScreen = document.getElementById('welcome-screen');
const startQuizButton = document.getElementById('start-quiz');
const quizContent = document.getElementById('quiz-content');
const timerContainer = document.getElementById('timer'); // Ensure this element exists in your HTML
const quizImage = document.getElementById('quiz-image'); // Ensure this element exists in your HTML

// Function to shuffle the quizData array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Display a single quiz question
function showQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    const choices = [...currentQuestion.choices]; // Copy the choices array
    shuffle(choices); // Shuffle the choices

    const choicesHtml = choices.map(choice => 
        `<label class="choice">
            <input type="radio" name="question${currentQuestionIndex}" value="${choice}">
            ${choice}
        </label>`
    ).join('');

    quizContainer.innerHTML = '';

    // Display image if available
    if (currentQuestion.Image) {
        quizImage.src = currentQuestion.Image;
        quizImage.style.display = 'block';
    } else {
        quizImage.style.display = 'none';
    }

    // Display question text
    const questionText = document.createElement('div');
    questionText.className = 'question';
    questionText.innerHTML = currentQuestion.question;
    quizContainer.appendChild(questionText);

    // Display choices
    const answersContainer = document.createElement('div');
    answersContainer.className = 'answers';
    answersContainer.innerHTML = choicesHtml;
    quizContainer.appendChild(answersContainer);

    // Add event listener to radio buttons
    const radioButtons = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]`);
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            submitButton.disabled = false;
        });
    });

    // Disable submit button initially
    submitButton.disabled = true;

    // Show the submit button and timer
    submitButton.style.display = 'block';
    timerContainer.style.display = 'block';

    // Start the timer for the current question
    startTimer();
}

// Start the timer for the current question
function startTimer() {
    let timeRemaining = timeLimit;
    if (timerContainer) {
        timerContainer.innerHTML = `Time remaining: ${timeRemaining}s`;
    }

    timerInterval = setInterval(() => {
        timeRemaining--;
        if (timerContainer) {
            timerContainer.innerHTML = `Time remaining: ${timeRemaining}s`;
        }

        // Add blinking effect when time is less than or equal to 10 seconds
        if (timeRemaining <= 10) {
            timerContainer.classList.add('blink');
        } else {
            timerContainer.classList.remove('blink');
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleNextQuestion();
        }
    }, 1000);
}

// Calculate the results
function showResults() {
    clearInterval(timerInterval); // Clear the timer when showing results

    // Clear the quiz container and hide the image
    quizContainer.innerHTML = '';
    quizImage.style.display = 'none';

    // Hide the submit button and timer
    submitButton.style.display = 'none';
    timerContainer.style.display = 'none';

    // Display the results in the results container
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizData.length}`;

    // Display end of quiz message and buttons
    const endMessage = document.createElement('p');
    endMessage.textContent = "And we've come to the end of the quiz. Do you want to try again?";
    resultsContainer.appendChild(endMessage);

    const tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        numCorrect = 0;
        shuffle(quizData); // Shuffle the questions before starting the quiz again
        resultsContainer.innerHTML = ''; // Clear the results container
        showQuiz();
        updateSubmitButtonState();
    });
    resultsContainer.appendChild(tryAgainButton);

    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.addEventListener('click', () => {
        resultsContainer.innerHTML = 'Thank you for participating.';
    });
    resultsContainer.appendChild(noButton);
}

// Handle the next question
function handleNextQuestion() {
    clearInterval(timerInterval); // Clear the timer for the current question

    const answerContainers = quizContainer.querySelectorAll('.answers');
    const selector = `input[name=question${currentQuestionIndex}]:checked`;
    const userAnswer = (answerContainers[0].querySelector(selector) || {}).value;

    if (userAnswer === quizData[currentQuestionIndex].answer) {
        numCorrect++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuiz();
    } else {
        showResults();
    }

    // Update submit button state for the next question
    updateSubmitButtonState();
}

// Enable/disable submit button based on answer selection
function updateSubmitButtonState() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const selector = `input[name=question${currentQuestionIndex}]:checked`;
    const userAnswer = (answerContainers[0].querySelector(selector) || {}).value;

    submitButton.disabled = !userAnswer;
}

// Handle start quiz button click
startQuizButton.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    quizContent.style.display = 'block';
    currentQuestionIndex = 0;
    numCorrect = 0;
    shuffle(quizData); // Shuffle the questions before starting the quiz
    resultsContainer.innerHTML = ''; // Clear the results container
    showQuiz();
    updateSubmitButtonState();
});

// Add event listener to update submit button state on answer selection
quizContainer.addEventListener('change', updateSubmitButtonState);

submitButton.addEventListener('click', handleNextQuestion);