const firstQuestion = document.getElementById("first-question");
const secondQuestion = document.getElementById("second-question");
const thirdQuestion = document.getElementById("third-question");


const firstTextLength = document.getElementById("first-text-length");

const secondTextLength = document.getElementById("second-text-length");

const thirdTextLength = document.getElementById("third-text-length");


// text counter
firstQuestion.addEventListener("input", (e) => {
    const characterCount = e.target.value.length;
    firstTextLength.innerText = characterCount;
});

secondQuestion.addEventListener("input", (e) => {
    const characterCount = e.target.value.length;
    secondTextLength.innerText = characterCount;
});

thirdQuestion.addEventListener("input", (e) => {
    const characterCount = e.target.value.length;
    thirdTextLength.innerText = characterCount;
});