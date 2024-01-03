const quizData = [ 
   {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },{
        question: 'What is the best football team in the world?',
        a: 'Real Madrid',
        b: 'Bayern Munich',
        c: 'AC Milan',
        d: 'Liverpool',
        correct: 'a'
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertool Markup Language',
        c: 'Hypertext Model Language',
        d: 'Hypertool Model Language',
        correct: 'a'
    },{
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    },{
        question: 'What does CSS stand for?',
        a: 'Cascading StyleSheet',
        b: 'Cool StyleSheet',
        c: 'StyleSheet Cascading',
        // d: 'Hypertool Model Language',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEL) => {
        if(answerEL.checked) {
            answer = answerEL.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEL) => {
        answerEL.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions</2>. 
            
                <button onClick="location.reload()">Reload</button>
            `;
        }
    }

});