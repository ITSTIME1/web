// // 우선 자바스크립트는 프로그래밍 언어이자, 스크립트 언어라고 한다.
// // 자바스크립트는 월드와이드웹의 핵심기술중 하나이다.
// // 웹페이지에서 행동을 하기 위해서 자바스크립트언어를 활용한다.
// // html 마크업 언어로 사용자에게 visual 적인 부분 텍스트와 이미지등을 보여주었다면
// // css 로 여러 스타일들을 원하는대로 꾸미고 클라이언트에게 더욱 선명하고, 가공된 상태로 보여주었다면
// // javascript 로 html+css에서 원하는 동작들을 구현하게끔 해주는 핵심 언어라고 생각하면 된다.

// // c,c++ 같은 언어와 같은 언어이지만 레벨은 다르다 c와 c++이 low level 이라면 자바스크립트는 high level 언어이다.

// // html, css 와 함께 사용되고 있으며, node js 에서 서버용 언어로 사용되어지고 있기도하다.
// // 자바스크립트언어는 ECMAScript 표준을 준수하는 JIT(just-in-tim) 컴파일언어이다.

// // ECMA = 다양한 브라우저에서 웹페이지의 상호운용성을 보장하기 위한 javascript 표준입니다.
// // 자바스크립트는 보통 웹브라우저 상에서 사용되어지고 있는데, 다양한 어플리케이션 서버로 확장해서 사용한다.
// // 자바스크립트와 자바를 혼동하는데 엄연히 다른 언어이다. 라이브러리 부터 문법 등 전혀 다른 언어이다.

// // node js = 오픈소스 서버 환경 이다. window, linux, unix, amcos 등 여러환경에서 서버 환경을 구축할 수 있고
// // 더 나아가 node js 는 javascript 엔진인 크롬 v8에 비동기 이벤트 처리 라이브러리인 libuv를 결헙한 플랫폼이다.
// // 서버에서도 자바스크립트를 사용한다고 했는데, node js 를 사용해서 서버환경을 구축하고 서버를 만들때 자바스크립트로 코드를 짜게된다.

// // 예를들어 유저(client)가 현재 웹페이지를 보여달라고 요청했을때, 유저에게 보여지기전
// // 필수 function 같은것들을 즉 백엔드 쪽에서 처리를 해야할 역할을 할 수 있게끔 도와주는 플랫폼이다.



// // javascript 에서도 마찬가지로 사용자로부터 입력을 받는 함수가 존재.
// // prompt, confirm 두개가 존재하는데 각기 차이점을 보인다.

// // 1. prompt 함수는 별도의 팝업창을 띄워서 사용자로부터 입력을 받는다.
// // 2. confirm 함수는 별도의 팝업창에서 확인, 취소 두가지 옵션을 주어 사용자로부터 true or false 값을 리턴을받는다.

// // 코딩테스트를 위해서 입력받는 방법이 따로 존재하는데


// // 1. readline 모둘
// // 2. fs 모듈


// // 우선 fs 모듈부터 살펴보자면

// // fs 모듈에서 한줄로 받을때
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// // fs 모듈에서 여러줄로 입력 받을때
// let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');

// let num = Number(input);



// // readline 모듈로 한개의 입력만 받을때

// const readline = requiree("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// r.on("line", function(line) {
//     input = line;
//     // 입력값이 정수라면
//     // input = parseInt(line);
//     rl.close();
// }).on("close", function() {
//     solution(input);
//     process.exit();
// })

// //한 줄의 입력(띄어쓰기 o , 예를 들면 1 2 3 4 5)
// function solution(input){
//     const [a,b] = input;
//     const answer = a+b;
//     console.log(answer);
// }

// // 한 줄의 입력을 받을때 띄어쓰기를 구분 1 2 3 4 5
// const readline = require('readline');
// const rl2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let input3;
// let list = [];
// rl.on('line', function(line) {
//     input = line;
//     rl.close();
// }).on("close", function() {
//     // list = input.split(' ').map((el) => el); 
//     list = input.split(' ').map((el) => parseInt(el)); // 입력값이 정수라면 parseInt로 형 변환
//     solution(list);
//     process.exit();
// });

// // 결론 fs 쓰자.f

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf-8').toString().split(" ");

const a = parseInt(inputData[0])
const b = parseInt(inputData[1])

console.log(a+b);

const fs = require('fs');
const inputData2 = fs.readFileSync(0, 'utf-8').toString().split(" ");

const aData = parseInt(inputData2[0]);
const bData = parseInt(inputData2[1]);

const result = aData-bData;
console.log(result);