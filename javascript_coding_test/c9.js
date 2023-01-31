var h = 23;
let m = 40;
// 10시 10분 
// 첫번재 방법은 시간을 분으로 나타낸다


if (h <= 0) {
    h = 24;
}

let time = (h*60+m) - 45
let originalTime = time / 60;
let originalMinute = time % 60;


console.log(parseInt(originalTime), originalMinute);