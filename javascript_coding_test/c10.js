// 문제분석

// 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산 하게 만들자

// 오케이 어렵지 않게 할 수 있겠는데

var time = 23;
var minute = 48;

var inputMinute = 25;

var mResult = minute + inputMinute;


if(mResult < 60) {
    console.log(time, mResult);
} else if(mResult > 60) {

    time += mResult / 60;
    if (time >= 24) {
        time = 0;
    }
    minute = mResult % 60;
    console.log(time, minute);
}
