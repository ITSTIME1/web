const firstQuestion = document.getElementById("first-question");
const secondQuestion = document.getElementById("second-question");
const thirdQuestion = document.getElementById("third-question");
const submitBtn = document.getElementById("submit-btn");
const response = document.getElementById("response");


const firstTextLength = document.getElementById("first-text-length");
const secondTextLength = document.getElementById("second-text-length");
const thirdTextLength = document.getElementById("third-text-length");



const REST_API_KEY = '4c62bd862e78e1365f336d5a51e12cd3'
const url = 'https://api.kakaobrain.com/v1/inference/kogpt/generation';
const max_tokens = 12;
const temperature = 1.0;
const top_p = 1.0;
const n = 1;



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


submitBtn.addEventListener("click", () => {

    let textMessage = "";
    fetch('https://api.kakaobrain.com/v1/inference/kogpt/generation', {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
        "Authorization": "KakaoAK " + REST_API_KEY, 
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        prompt: "대한민국의 수도는 어떤 곳이야?",
        max_tokens: max_tokens,
        temperature: temperature,
        top_p: top_p,
        n: n
    }),
  }).then((response) => {
    response.textContent = data.body;
  });
});




                        