const firstQuestion = document.getElementById("first-question");
const secondQuestion = document.getElementById("second-question");
const thirdQuestion = document.getElementById("third-question");
const submitBtn = document.getElementById("submit-btn");
const response = document.getElementById("response");


const firstTextLength = document.getElementById("first-text-length");
const secondTextLength = document.getElementById("second-text-length");
const thirdTextLength = document.getElementById("third-text-length");



const max_tokens = 32;
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

  
submitBtn.addEventListener("click", (e) => {

    let message = firstQuestion.value + " " + secondQuestion.value + " " + thirdQuestion.value;
    
    const data = {
        key : message,
    }

    console.log(data);
    fetch("/result", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    }).catch((error) => {
        console.error('Error:', error);
    });
      
});