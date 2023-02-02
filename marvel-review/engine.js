// 이미지를 클릭했을 경우 랜덤으로 이미지가 변경되면서
// 설명이랑 이름이 바뀌는거
// 추가적으로 keyframe 을 사용해서 효과를 넣기
// 뭔가 허접한가..?

const character = [
    {
        id: 1,
        name: "Thor",
        description: "Thor Odinson, more commonly known as Thor, and sometimes by his title as the God of Thunder.",
        power_rate: "4 / 5.0",
        image: "/marvel-review/images/thor.jpeg"
    },
    {
        id: 2,
        name: "BlackWidow",
        description: "Black Widow is a fictional character appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense.",
        power_rate: "3.5 / 5.0",
        image: "/marvel-review/images/blackWidow.jpeg"  
    },
    {
        id: 3,
        name: "Iron man",
        description: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.",
        power_rate: "4.5 / 5.0",
        image: "/marvel-review/images/ironman.jpeg" 
    },
    {
        id: 4,
        name: "Hulk",
        description: "The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby.",
        power_rate: "5.0 / 5.0",
        image: "/marvel-review/images/hulk.jpeg"
    }
];

const img = document.getElementById("character-image");
const charcter_name = document.getElementById("name");
const description = document.getElementById("description");
const power = document.getElementById("power-rate");

let currentIndex = 0;

// inital content

window.addEventListener("DOMContentLoaded", function() {
    const item = character[currentIndex];
    img.src = item.image;
    charcter_name.textContent = item.name;
    description.textContent = item.description;
    power.textContent = item.power_rate
});


function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

img.addEventListener("click", function() {
    setTimeout(() => {console.log("첫 번째 메시지")}, 2000);
    currentIndex = rand(0, 4)
    var filed = character[currentIndex];
    img.src = filed.image;
    charcter_name.textContent = filed.name;
    description.textContent = filed.description;
    power.textContent = filed.power_rate;
    
});