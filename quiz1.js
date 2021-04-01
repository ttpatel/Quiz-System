window.onload = function () {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        ans: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        ans: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        ans: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },

    {
        id: 4,
        question: "What is the full form of HTML?",
        ans: "Hypertext Markup Language",
        options: [
            "Hey Text Markup Language",
            "HyperText Markup Language",
            "Hypertext Markup Language",
            "Hypertext Markup Locator",
        ]
    },
    // {
    //     id: 5,
    //     question: "What does CSS stands for?",
    //     ans: "Cascading Style Sheets",
    //     options: [
    //         "Colorful Style Sheets",
    //         "Cascading Style Sheets",
    //         "Computer Style Sheets",
    //         "Creative Style Sheets",
    //     ]
    // },
    // {
    //     id: 6,
    //     question: "Inside which HTML element do we put the JavaScript?",
    //     ans: "<scriipt>",
    //     options: [
    //         "<script>",
    //         "<js>",
    //         "<scripting>",
    //         "<javascript>",
    //     ]
    // },
    // {
    //     id: 7,
    //     question: "Which class provides a responsive fixed width container",
    //     ans: "container",
    //     options: [
    //         ".container-fluid",
    //         ".container",
    //         ".container-fixed",
    //         ".container-sticky",
    //     ]
    // },
    // {
    //     id: 8,
    //     question: "The Bootstrap grid system is based on how many columns?",
    //     ans: "12",
    //     options: [
    //         "6",
    //         "5",
    //         "9",
    //         "12",
    //     ]
    // },
    // {
    //     id: 9,
    //     question: "Which character is used to indicate an end tag?",
    //     ans: "/",
    //     options: [
    //         "<",
    //         ">",
    //         "/",
    //         "^",
    //     ]
    // },
    // {
    //     id: 10,
    //     question: "How do you create a function in JavaScript?",
    //     ans: "function = myfunction",
    //     options: [
    //         "function myFunction()",
    //         "function = myFunction()",
    //         "myFunction()",
    //         "function.myFunction()",
    //     ]
    // }
];

function submitForm(e) {
    e.preventDefault();

    let name = document.forms["welcomeform"]["username"].value;

    //storing name//
    sessionStorage.setItem("username", name)
    location.href = "quiz.html";
}

let ques_count = 0;
let points = 0;

function next() {
    let useranswer = document.querySelector(".active .answerText").innerHTML;
    if (useranswer == questions[ques_count].ans) {
        console.log("right answer");
        points += 10;
        sessionStorage.setItem("points", points);
    } else {
        console.log("wrong answer");
    }
    if (ques_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes}minutes and ${seconds}seconds`)
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }
    // console.log(questions[ques_count].ans,useranswer);
    // console.log(useranswer.length,questions[ques_count].ans.length)
    //verifying answers//aa
    // console.log(points);

    ques_count++;
    show(ques_count);

}
function prev() {
    ques_count--;
    show(ques_count);
}


function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `<h2>Q${ques_count+1}.${questions[count].question}</h2>
<ul class="optiongroup list-unstyled">
<li class="option">
    <input type="radio" name="answer" id="ans1" class="answer">
    <label class="answerText">${questions[count].options[0]}</label>
</li>
<li class="option">
    <input type="radio" name="answer" id="ans2" class="answer">
    <label class="answerText">${questions[count].options[1]}</label>
    </li>
</li>
<li class="option">
    <input type="radio" name="answer" id="ans3" class="answer">
    <label class="answerText">${questions[count].options[2]}</label>
    </li>
</li>
<li class="option">
    <input type="radio" name="answer" id="ans4" class="answer">
    <label class="answerText">${questions[count].options[3]}</label>
    </li>
</li>
</ul> 
`;
    toggleActive();


}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active");
        }
    }
}