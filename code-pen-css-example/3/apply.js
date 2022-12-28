// 함수를 작성하는 방법.
function createParagraph() {
    // const = constance = 상수 = 값의 재할당이 불가능한 변수타입
    // document = 웹 페이지 그 자체를 의미한다 즉 HTML 요소 내의 어떠한 선택자의 접근하기 위해서
    // 항상 document 부터 시작해야한다.
    // 즉 클래스, id, 태그이름 name 속성값, 선택자
    
    // createElement HTML 요소 내의 p를 생성하겠다는 의미.
    const para = document.createElement('p');
    // 텍스트를 추가할 수 있는 속성 textContent
    // 테스트를 추가할 수 있는 속성은 두가지가 있는데
    // 1. textContent
    // 2. innerText
    // 두가지 모두 사용되어지며 textContent 문법이 먼저 사용되어져 왔다

    // 두 속성의 공통점은 텍스트 값을 할당 할 수 있는 속성이고
    // 두 속성의 차이점은 텍스트를 반환할 때 불필요한 스페이스를 없애고 가지고 오느냐 아니면 그대로 가지고 오느냐의 차이이다
    // 전자가 innerText 이고 후자가 textContent 이다
    // 현재 chrome 브라우저 상에서는 동일한 값으로 적용되어 출력되게 되어진다.
    para.textContent = "You clicked the button!"
    

    // document.body = 가르키는 선택자가 <body></body> 태그이다.
    // 또는 <frameset></frameset> 
    // null
    document.body.appendChild(para);

    // document 에 지정되어져 있는 body 태그의 아이디가 무엇인지 알려주는 것이고
    alert(document.body.id);

    // 새로운 body 태그를 만들어서
    // id를 직접 할당해주고 있다
    const aNewBodyElement = document.createElement("body");
    aNewBodyElement.id = "newBodyElement";
    
    // body 의 id 값을 변경
    alert(document.body.id)
    
    // javascript 의 for문
    for (const button of buttons) {
        button.addEventListener('click', createParagraph);
    }

    // 기존에 java 와 비슷한 문법 구조를 가지고 있다
    for (let step = 0; step < 5; step++) {
        console.log(step);
    }    
}


function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].sected) {
            numberSelected ++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");

// 안드로이드 처럼 이벤트 리스너를 달아주는건 동일한 것 같다
btn.addEventListener('click', () => {
    const musicTypes = document.selectForm.musicTypes;
     
});

let i = 0;
// do - while 문도 존재한다
do {
    i += 1;
} while (i < 5);


let n = 0;
let x = 0;

while(n < 3) {
    n++;
    x += n;
}


// infinite loop this badly loop
while(True) {
    i++
}


for (let i = 0; i < a.length; i ++) {
    if (a[i] === theValue) {
        break;
    }
}

function dumpProps(obj, objName) {
    let result = '';
    for (const i in obj) {
        result += '${objName}.${i} = ${obj[i]}<br>';
    }
    result += '<hr>';
    return result
}


// 배열 array
// 배열을 선언
const arr = [3, 5, 7];
arr.foo = "helllo";



var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`)
}
// expected output: obj.a, obj.b, obj.c 1, 2, 3

// in 반복문 보다 of 반복문이 더 많이 친숙한 느낌이다

let iterable = [10, 20, 30];

for (let value of itertable) {
    console.log(value);
}

const obj = {foo: 1, bar: 2};

for (const [key, val] of Object.entries(obj)) {
    console.log(key, val)
}

var arr = ['a', 'b', 'c'];

// 배열의 뒤쪽에 값을 추가하는 method
arr.push('d')
// 배열의 가장 왼쪽에 추가하는 method
arr.unshift('d')

// splice('위치', '0', '요소')
arr.splice(2, 0, 'd');

// 원하는 위치에 가장 앞에 있는 요소를 추가하고
// 그 다음 요소를 그 다음 요소에 추가한다
arr.splice(4, 0, 'e', 'f');

// 배열의 마지막 요소를 제거
arr.pop();

// 마지막 요소를 변수에 반환 받을 수 있다
var popped = arr.pop();

// 배열의 첫번째 요소를 제거
arr.shift();

// 배열의 첫번재 요소를 제거한 값을 변수에 반환 받을 수 있다.
var shifted = arr.shift();

// splice 로 지우는 방법
// splice('해당 위치 부터(index 위치)', '1(지우고자 하는 요소들의 개수))
arr.splice(2, 1)

// index 값 = 1 부터 2개의 요소를 제거
arr.splice(1, 2)

// 1부터 1개의 요소를 제거한 다음 removed 변수의 반환 받을 수 있음 
removed = arr.splice(1, 1);

// delete 로도 가능
delete arr[1];

// 배열의 가장 끝에 e를 추가하는 코드
arr[arr.length] = 'e';

// 배열의 크기를 하나 줄이는 코드
// 실제로 배열의 마지막 요소부터 한개씩 사라진다
arr.length = arr.length - 1;




// 예시 코드로 주석 달면서 설명해보자

// function - 함수를 만들어준다.
function createParagraph() {
    // 값의 재할당이 불가능한 const 타입의 변수를 만들어서 document에 접근후
    // p라는 엘리먼트를 생성하도록 한다
    const para = document.createElement('p');
    
    // 변수에 textContent 를 사용해서 텍스트를 변수에 할당 할 수 있는 요소를 사용하여 string 타입을 넣어준다
    para.textContent = 'You clicked the button!';
    // 이 함수가 실행되게 되면 body에 para가 추가될 것이다
    document.body.appendChild(para);
  }
  // 모든 선택자 'button'을 가지고 있는 모든 선택자를 buttons에 담고
  const buttons = document.querySelectorAll('button');
  
  // 그 버튼들을 가지고 와서 버튼을 가지고 오면 이벤트리스너가 실행되게 되며
  // 문장이 생성되게 된다
  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }


// 첫번째 div 선택자를 가르킨다
document.querySelector('#foo\\bar')

// 두번째 div 선택자를 가르킨다
document.querySelector('#foo\\:bar')

// 콜론이나 ; 공백을 포함한 선택자나 id를 사용해야 하면
// 반드시 \ 를 사용해 해당 문자를 이스케이프 해야 한다
// 만약 백슬래시가 들어간 선택자가 존재한다면
// 백슬래시를 불러오기 위해서 \\ 두번 있어야 불러올 수 있게 된다

// HTML 본문을 읽기 전에 문서의 헤드에서 자바스크립트를 불러와 실행한다면
// 문제가 생길 여지가 있으므로

// 'DOMContentLoaded' 를 사용해서 로딩 시점의 오류를 예방할 수 있다.
document.addEventListener('DOMContentLoaded', () => {

});

// 이렇게 한다면 defer 를 이용해서 script 태그를 만나더라도
// HTML 코드부터 불러오게 된다.
<script src = "script.js" defer></script>

const parent = document.createElement('div');
const child = document.createElement('p');

// <div><p></p></div>
parent.append(child);

// <div>append 예시</div>
const parent1 = document.createElement('div');
parent1.append('append 예시');

// append 와 appendChild 의 차이점은
// appendChild 는 오직 Node 객체만 받을 수 있다 게다가
// 여러개의 노드를 추가 할 수 있는 append와 달리 오직 한번의 하나의 노드만 추가가 가능하다

