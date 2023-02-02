// 구현할내용은 plus, minus, multiple 버튼을 각각 눌렀을때
// 1. 수가 바뀐다.
// 2. 수의 색깔이 랜덤으로 적용된다.
// 3. font-size 가 랜덤으로 변경된다.


const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multipleBtn = document.getElementById("multi");
const counterNumber = document.getElementById("counter");


var count = 0;

plusBtn.addEventListener("click", function() {
    counterNumber.textContent = f_sum()
    if (parseInt(counterNumber.textContent) < 0) {
        counterNumber.textContent = "마이너스는 싫어용..";
    }
});


minusBtn.addEventListener("click", function() {
    counterNumber.textContent = f_minus()
    if (parseInt(counterNumber.textContent) < 0) {
        counterNumber.textContent = "마이너스는 싫어용..";
    }
});


multipleBtn.addEventListener("click", function() {
    counterNumber.textContent = f_multi()
    if (parseInt(counterNumber.textContent) < 0) {
        counterNumber.textContent = "마이너스는 싫어용..";
    }
});

function f_sum() {
    return count += 1;
}

function f_minus() {
    return count -= 1;

}

function f_multi () {
    return count ** count
}