const start =document.querySelector(".start");
const intructions =document.querySelector(".box");
const exit =document.querySelector(".exit");
const continuo = document.querySelector(".continue");
const next = document.querySelector(".next");
const question = document.querySelector(".question");
const startAgain = document.querySelector(".start-again");
const quit = document.querySelector(".quit");
const time = document.querySelector(".time-left");
const item =document.querySelector(".item");
const points =document.querySelector(".points");
const result =document.querySelector(".result");
const totalCorrect =document.querySelector(".correct-count");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const optionQue=document.querySelectorAll(".opt");
let index=0;
let correct=0;
let timer=0;
let interval=0;
start.addEventListener("click",()=>{
    intructions.style.display="flex";
    start.style.display="none";
})
exit.addEventListener("click",()=>{
    intructions.style.display="none";
    start.style.display="block";
})
let MCQS = [{
    question: "What does HTML stand for?",
    choice1: "Hyperlinks and Text Markup Language",
    choice2: "Hyper Text Markup Language",
    choice3: "Hyper Text Making Language",
    choice4: "Hyper Text Mark Language",
    answer: 1
},
{
    question: "What does CSS stand for?",
    choice1: "Colorful StyleSheet",
    choice2: "Creative Style Sheet",
    choice3: "Cascading Style Sheet",
    choice4: "Computer Style Sheet",
    answer: 2
},
{
            question: "Which HTML tag is used to define an internal style sheet?",
    choice1: "<script>",
    choice2: "<style>",
    choice3: "<html>",
    choice4: "<svg>",
    answer: 1
},
            {
            question: "Which is the correct CSS syntax?",
            choice1: "body{color:black}",
    choice2: "{body{color:black}",
    choice3: "body={color:black}",
    choice4: "body:color{black}",
    answer: 0
},
            {
                question: "How do you insert a comment in a CSS file?",
                choice1: "/*This is Comment*/",
    choice2: "//This Is Comment",
    choice3: "<!--- This Is Comment --->",
    choice4: "//This Is Comment//",
    answer: 1
},
            {
                question: "How do you insert a comment in a HTML file?",
    choice1: "/*This is Comment*/",
    choice2: "//This Is Comment",
    choice3: "<!--- This Is Comment --->",
    choice4: "//This Is Comment//",
    answer: 2
},
{
    question: "Which property is used to change the background color?",
    choice1: "backgroundColor",
    choice2: "BgColor",
    choice3: "Color-Background",
    choice4: "background",
    answer: 3
},{
    question: "How to write an IF statement in JavaScript?",
    choice1: "if i==5",
    choice2: "if(i==5)",
    choice3: "if(i==5)then",
    choice4: "if i==5 then",
    answer: 2
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<js></js>",
    choice2: "<javascript></javascript>",
    choice3: "<script></script>",
    choice4: "<scripting>",
    answer: 2
},
{
    question: "How does a WHILE loop start?",
    choice1: "while(i <= 0)",
    choice2: "while(i <= 0 i++)",
    choice3: "while i <= 0",
    choice4: "while (i++ i <= 0)",
    answer: 0
}];

let countDown= ()=>{
    if(timer === 20){
        clearInterval(interval);
        next.click();
    }
    else{
        timer++;
        time.innerHTML=timer;
    }
}
// setInterval(countDown,1000);

continuo.addEventListener("click",()=>{
    intructions.style.display="none";
    item.style.display="flex";
    interval = setInterval(countDown, 1000);
    loadData();
})
let loadData = () => {
    question.innerText =index + 1 + ". "+ MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;
    timer=0;
}

totalCorrect.innerHTML=`${correct} out of ${MCQS.length} Questions`;
loadData();
optionQue.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        // choices.classList.add("active");
        //check answer
        if (choiceNo === MCQS[index].answer) {
            choices.style.backgroundColor="green";
            correct++;
        } else {
            correct += 0;
            choices.style.backgroundColor="red";

        }
        clearInterval(interval);
        //disable All Options When User Select An Option
        for (i = 0; i <= 3; i++) {
            optionQue[i].classList.add("disabled");
        }
    })
});
next.addEventListener("click",()=>{
    if(index!==MCQS.length-1){
        index++;
        optionQue.forEach(removeActive => {
            // removeActive.classList.remove("active");
            removeActive.style.backgroundColor="rgb(249, 239, 235)";
        })
        loadData();
        totalCorrect.innerHTML=`${correct} out of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    }else{
        index=0;
        clearInterval(interval);
        item.style.display = "none";
        points.innerHTML = `You Got ${correct} Out Of ${MCQS.length}`;
        result.style.display = "flex";
    }
    for (i = 0; i <= 3; i++) {
        optionQue[i].classList.remove("disabled");
    }
})
startAgain.addEventListener("click",()=>{
    window.location.reload();
})
quit.addEventListener("click",()=>{
    result.style.display="none";
    start.style.display="block";
})