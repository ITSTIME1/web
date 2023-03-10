// let, var, const
// vqr 를 제외하고 let, const 는 ES6 때부터 문법이 새로 추가 되었다.


// 1. const = constance = 상수
// 상수는 한번 선언과 동시에 값을 변경할 수 없다는 다른 언어의 const 와 동일한 속상을 가리킨다

const myName = "TaeSun";
myName = "Haeun" // error 를 발생시킴 위와 같은 이유로 constance 속성 때문에 값을 선언 이후 변경 시킬 수 없음
//TypeError 를 불러일으킨다.

// 또한 const 는 값이 반드시 선언과 동시에 할당이 되어 있어야 한다 .
// const a; // vscode 상에서는 a의 underline이 그어져있는데 그 이유는 const 로 선언한 변수는 선언과 동시에 값이 할당이 되어야 하기 때문이다
console.log(a)


// 2. let = 다른 값이 재할당될 수 있습니다.
let meal = 'Bulgogi';
meal = 'hambuger';
// const 와 다른 점으로는 "값의 재할당을 허용한다" 입니다.
// const 에서는 선언과 동시에 값이 할당이 되어져야 하는데
// let 같은 경우 선언과 동시에 값을 할당 하지 않는다면
// value 자체가 undefined 정의되지 않음 으로 설정이 되어진다.

// 때문에 값의 재할당이 이루어지지 않는 변수 같은 경우 const 키워드를 사용하는것이 필요할 것이고
// 값의 변경이 이후에 이루어진다면 let 을 사용하는게 맞을것 같다.



// 3. var = var 키워드는 ES6 이전의 나온 문법으로 변수를 할당하는 키워드는 const, let 동일하다
// 단 차이점으로는 var 는 javascript 문법상에서 조금 자유로운 편이라고 본다

var age = 22;
age = 23;
// 여기까지 선언과 동시에 값을 할당해봤고, 값을 변경까지 해보았다.
var age = "??";
// 즉 재선언이 가능하다 재할당이랑 헷갈리면 안되는게
// 재선언은 변수를 이미 선언을 했는데, 이후 다시 선언을 한다는 개념이다

// 하지만 const, let 은 "재선언이 불가능하다".
// 만약 하게 된다면 SyntaxError 가 뜨게 된다
// 에러가 뜨는 이유는 'age' has already been declared 이기 때문이다

// 자바스크립트 다른 언어들도 마찬가지로 변수를 가장 위에 작서해두고
// 그 이후의 논리흐름을 따라가게 된다
// 자바스크립트에서도 마찬가지로 논리의 흐름에 맞게
// 변수를 가장 위에 작성하도록 권장하고 있음을 알 수 있다.


// 4. 호이스팅(Hoisting) = 자바스크립트에서 호이스팅이라는건
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미한다
// var 로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화 하는 것.
// var 키워드 같은 경우 자유롭다는건 이 호이스팅 때문이라는걸 알 수 있다
// 변수의 정의가 범위에 따라 변경될 수 있다
// 이건 위에서 선언만하고 값을 할당하지 않아도 undefined 가 할당 되었던 것 처럼
// 선언과 할당의 분리가 이루어질 수 있다는 뜻이 된다.

// 그렇기 때문에 변수만 선언해둠과 동시에 출력을 하게 되면 undefined 가 출력이 될 것이고
// 이후에 name 에다 값을 할당하게 된다면 그 이후부터 값이 변경되어지게 되는걸 알 수 있다.
var name; // 이런식으로 정의한다면 name 에는 호이스팅이 적용되어 undefined로 정의되어진다.
console.log(name); // undefined 로 정의 되어지고





