// 이제부터 구현할 예제는 click me button 을 클릭했을때
// 랜덤적으로 색상이 변하는 예제를 구현해볼건데

// 우선적으로 한번 예제를 보면서 감을 잡아보자

// hex 변수에다가 리스트를 만들어주었고
// btn 변수에다가는 document 로 접근해 btn이라는 아이디를 조작할 수 있게끔 id="btn"인 요소를 변수에담았어.
// 이때document 가 의미하는건
// DOM을 이해하면 알 수 있다.
// 웹페이지는 렌더링하기전에 DOM 객체를 먼저 만드는데
// 이 DOM 이라는건 트리형태로 되어있는 문서객체 모델이다.
// document 안에는 트리형태를 띄고 있기 때문에 부모와 자식 간의 관계를 형성하고 있다.
// body 태그안에 div 태그가 있고 div태그안에 h, p 태그가 있듯이 부모자식관계를 형성하고 있으며
// 이런 태그들의 접근을 javacript 로 접근가능하게 만들어준다.
// 때문에 이 DOM의 최상위 루트인 document 를 통해서 html, css 태그등과 같은 dom 문서화된 태그들의 접근을 해주는 것이다.
// 즉 dom은 이런html 문서들의 접근을 하기 위해서 편리한 API 들을제공해주는 interface 라고 생각하면 된다.
// 고로 우리는 dom에서 제공해주는 api를 사용해서 현재 태그의 접근을 하고 있다.

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
// querySelector 는 css 선택자에 매칭되는 첫번째 요소를 리턴한다.

const color = document.querySelector(".color");

// btn 이라는 태그를 클릭했을 경우 이벤트를 걸어준다.
btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.background = hexColor;


});

function getRandomNumber() {
    return Math.floor(Math.random() * 5);
}
