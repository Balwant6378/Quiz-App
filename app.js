const questions = [ 
    {
       'que':"which of the following is a markup language?",
       'a': " html",
       'b': "css",
       'c': "javaScript",
       'd': "php",
       'correct': "a"
    },
    {
        'que':"what year was javaScript launched?",
         'a': "1996",
         'b': "1995",
         'c': "1994",
         'd': "None of the above",
         'correct': "b"
    },
    {
        'que':"what does CSS stands for?",
         'a': "Hypertext markup language",
         'b': "Casecading style sheet",
         'c': "jason object notation",
         'd': "None of the above",
         'correct': "b"
    },

    {
        'que':"who is developed javascript?",
         'a': "Guido van Rossum",
         'b': "James Gosling",
         'c': "Bjarne Stroustrup",
         'd': "Brendan Eich",
         'correct': "d"
    },
    {
        'que':"what does DOM stands for?",
         'a': "document object model",
         'b': "Casecading style sheet",
         'c': "jason object notation",
         'd': "None of the above",
         'correct': "a"
    },
    {
        'que':"how many type of for loop in javaScript?",
         'a': "3",
         'b': "2",
         'c': "5",
         'd': "6",
         'correct': "c"
    },
    {
        'que':"which function is passed as an argument to another function?",
         'a': "Callback function",
         'b': "User defined function",
         'c': "Arrow function",
         'd': "None of the above",
         'correct': "a"
    },
    {
        'que':"which keywords is used for error handling in javaScript?",
         'a': "Catch",
         'b': "Try",
         'c': "Try-catch",
         'd': "None of the above",
         'correct': "c"
    },
    {
        'que':"how many type of synchronous programming in javascript?",
         'a': "1",
         'b': "3",
         'c': "4",
         'd': "2",
         'correct': "d"
    },
    {
        'que':"what does API stands for?",
         'a': "javaScript object notation",
         'b': "Application programming interface",
         'c': "document object model",
         'd': "None of the above",
         'correct': "b"
    }
    
];
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.querySelector("#queBox");
const optionInput = document.querySelectorAll(".options")
const submitBtn = document.querySelector(".btn")
console.log(submitBtn);


const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1})${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
submitBtn.addEventListener("click",()=>{
    submitQuiz();
}) 
const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer(); 
    console.log(ans);
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}     
const getAnswer = () => {
    for (let input of optionInput) {
        if(input.checked){
            return input.value;       
        }
    }
}
const reset = () => {
    for (let input of optionInput) {
           input.checked = false;       
    }
}

const endQuiz = () =>{
    document.querySelector(".box").innerHTML = `
    <div style = "text-align:center ">
    <h3> Thank you for playing the quiz!</h3>
    <h2> ${right} / ${total} are correct!
    </div>`;
}
loadQuestion();
