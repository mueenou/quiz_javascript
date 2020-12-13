const questions = [
    {
        question: "Quel âge a Elon Musk?",
        r_a: "49",
        r_b: "55",
        r_c: "52",
        r_d: "60",
        correct: "r_a",
    },
    {
        question: "Quel est le dernier processeur de Apple ?",
        r_a: "M1",
        r_b: "Intel",
        r_c: "Amd",
        r_d: "Snapdragon",
        correct: "r_a",
    },
    {
        question: "Qui est le président des Etats-Unis ?",
        r_a: "Joe Biden",
        r_b: "Hilary Clinton",
        r_c: "Donald Trump",
        r_d: "Abraham Lincoln",
        correct: "r_c",
    },
    {
        question: "Qu'est ce que le Sars-cov-2 ?",
        r_a: "Un virus",
        r_b: "Une boîte de céréale",
        r_c: "La dernière paire de Nike",
        r_d: "un vaccin",
        correct: "r_a",
    },
    {
        question: "Qui est le créateur de Facebook",
        r_a: "Jeff Bezos",
        r_b: "Mark Zuckerberg",
        r_c: "Elon Musk",
        r_d: "Nicolas Sarkozy",
        correct: "r_b",
    },
]

let currentQuestion = 0;
let score = 0;
const allAnswers = []
const allRightAnswers = []
const responsesEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('.question');
const r_a_text = document.getElementById('r_a_text');
const r_b_text = document.getElementById('r_b_text');
const r_c_text = document.getElementById('r_c_text');
const r_d_text = document.getElementById('r_d_text');

let buttonEl = document.getElementById('submit-button');


const getQuestions = () => {
    deselectAnswers();
    const currentQuestionData = questions[currentQuestion]
    questionEl.textContent = currentQuestionData.question;
    r_a_text.textContent = currentQuestionData.r_a;
    r_b_text.textContent = currentQuestionData.r_b;
    r_c_text.textContent = currentQuestionData.r_c;
    r_d_text.textContent = currentQuestionData.r_d;    
}

const getSelectedResponse = () => {
    let answer = undefined;
    
    responsesEls.forEach((responseEl) => {
        if(responseEl.checked) {
            answer = responseEl.id
        }
    });
    
    return answer;
}

const deselectAnswers = () => {
    responsesEls.forEach((responseEl) => {
        responseEl.checked = false;
    });
}

const responseFormatter = () => {
    return score > 1 ? 'réponses' : 'réponse'
}

const bonneFormatter = () => {
    return score > 1 ? 'bonnes' : 'bonne'
}
buttonEl.addEventListener('click', () =>{
    const answer = getSelectedResponse();

    allAnswers.push(answer)
    allRightAnswers.push(questions[currentQuestion].correct)
    if(answer) {
        console.log(answer, questions[currentQuestion].correct)
        if(answer === questions[currentQuestion].correct) {
            score++
        }
        currentQuestion++
        if(currentQuestion < questions.length) {
            getQuestions();
        } else {
            console.log(allAnswers)
            console.log(allRightAnswers)
            const quizDiv = document.getElementById('quiz-card');
            quizDiv.classList.add('hidden');
            const body = document.querySelector('body');
            const p = document.createElement('p');
            const resultDiv = document.createElement('div');
            resultDiv.id= 'result-card'
            p.textContent = `Tu as eu ${score} ${bonneFormatter()} ${responseFormatter()} sur ${questions.length} questions`
            resultDiv.appendChild(p);
            body.appendChild(resultDiv)
        }
    }
});


getQuestions();
