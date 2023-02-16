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


// when submit button click occur "post"

// 이부분을 nodejs 서버로 요청한다음
// 이 parameter 만 받고 나머지 부분은 nodejs 서버에서 -> 카카오 api 호출 하면 될거 같은데.
// submitBtn.addEventListener("click", () => {
//     postData('https://api.kakaobrain.com/v1/inference/kogpt/generation', data)
//   .then((data) => {
//     // received parsed data
//     // why null
//     if(data != null) {
//         console.log(data);
//         console.log("null is not");
//     }
//   }).catch ((error) => { 
//     console.error("failure", error);
//   });
// });

// async function postData(url = "", data = {}) {
//     console.log(location.origin + "location origin");
//     // post data url success
//     console.log(url + "post data url");
//     // data success
//     console.log(data);

//     const response = await fetch(url, {
//       method: 'POST', 
//       mode: 'cors',
//       headers: {
//         'Authorization': 'KakaoAK ' + REST_API_KEY,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     // 여기서 파스한거네
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });
  




                        