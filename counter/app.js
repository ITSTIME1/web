// 구현할내용은 plus, minus, multiple 버튼을 각각 눌렀을때
// 1. 수가 바뀐다.
// 2. 수의 색깔이 랜덤으로 적용된다.
// 3. font-size 가 랜덤으로 변경된다.


const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multipleBtn = document.getElementById("multi");
const counterNumber = document.getElementById("counter");


var count = 0;

if (parseInt(counterNumber.textContent) < 0) {
    counterNumber.textContent = "마이너스는 싫어용..";
}

plusBtn.addEventListener("click", function() {
    counterNumber.textContent = f_sum()
});


minusBtn.addEventListener("click", function() {
    counterNumber.textContent = f_minus()
});


multipleBtn.addEventListener("click", function() {
    counterNumber.textContent = f_multi()
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