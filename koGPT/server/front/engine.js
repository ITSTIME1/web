const firstQuestion = document.getElementById("first-question");
const secondQuestion = document.getElementById("second-question");
const thirdQuestion = document.getElementById("third-question");
const submitBtn = document.getElementById("submit-btn");
const response = document.getElementById("response");


const firstTextLength = document.getElementById("first-text-length");
const secondTextLength = document.getElementById("second-text-length");
const thirdTextLength = document.getElementById("third-text-length");



const REST_API_KEY = '4c62bd862e78e1365f336d5a51e12cd3'
const urlString = 'https://api.kakaobrain.com/v1/inference/kogpt/generation';

const max_tokens = 32;
const temperature = 1.0;
const top_p = 1.0;
const n = 1;

const data = {
    prompt: "대한민국의 수도는",
    max_tokens: max_tokens,
    temperature: temperature,
    top_p: top_p,
    n: n
}


// firstText counter
firstQuestion.addEventListener("input", (e) => {
    const characterCount = e.target.value.length;
    firstTextLength.innerText = characterCount;
});

// secondText counter
secondQuestion.addEventListener("input", (e) => {
    const characterCount = e.target.value.length;
    secondTextLength.innerText = characterCount;
});


// thirdText counter
thirdQuestion.addEventListener("input", (e) => {
    const characterCount = e.target.value.length;
    thirdTextLength.innerText = characterCount;
});

  
// submitBtn.addEventListener("click", (e) => {
//     console.log(firstQuestion.value);
//     console.log(secondQuestion.value);
//     console.log(thirdQuestion.value);   
// });