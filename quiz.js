const qiuzDB = [
    {
        question: "01:What is the full form of HTML?",
        a: "Hey Text Markup Language",
        b: "HyperText Markup Language",
        c: "Hypertext Markup Language",
        d: "Hypertext Markup Locator",
        ans: "ans2"
    },
    {
        question: "02:What does CSS stands for?",
        a: "Colorful Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        ans: "ans2"
    },
    {
        question: "03:Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        ans: "ans1"
    },
    {
        question: "04:Which class provides a responsive fixed width container",
        a: ".container-fluid",
        b: ".container",
        c: ".container-fixed",
        d: ".container-sticky",
        ans: "ans2"
    },
    {
        question: "05:The Bootstrap grid system is based on how many columns?",
        a: "6",
        b: "5",
        c: "9",
        d: "12",
        ans: "ans4"
    },
    {
        question: "06:What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<break>",
        c: "<lb>",
        d: "<hr>",
        ans: "ans1"
    },
    {
        question: "07:Choose the correct HTML element to define emphasized text?",
        a: "<em>",
        b: "<i>",
        c: "<italic>",
        d: "<strong>",
        ans: "ans1"
    },
    {
        question: "08:Which character is used to indicate an end tag?",
        a: "<",
        b: ">",
        c: "/",
        d: "^",
        ans: "ans3"
    },
    {
        question: "09:How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World')",
        b: "alertBox('Hello World')",
        c: "msg('Hello World')",
        d: "alert('Hello World')",
        ans: "ans4"
    },
    {
        question: "10:How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "function = myFunction()",
        c: "myFunction()",
        d: "function.myFunction()",
        ans: "ans2"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelector('.answer')
const showScore = document.querySelector('.showScore')

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    console.log(qiuzDB[0].question)
    const questionList = qiuzDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currentElement) => {
        if (currentElement.checked) {
            answer = currentElement.id;
        }

    })
    return answer;
}

const deselectAll = () => {
    answers.forEach((currentElement) => {
        currentElement.checked = false;
    })
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);
    if (checkedAnswer == qiuzDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < qiuzDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
<h3>You Scored ${score}/${qiuzDB.length} </h3>
<button class="btn" onclick="loaction.reload()">Play Again</button>
`;
        showScore.classList.remove('scoreArea');
    }

});
