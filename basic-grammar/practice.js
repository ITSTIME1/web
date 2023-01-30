// // get total number
// function sum(n) {
//     var sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }

//     return sum;
// }

// let result = sum(10);
// console.log(result);

function findLength(arr) {
    var cnt = 0;
    for(let i=0; i <= arr.length; i++) {
        if (arr[i] == "딸기") {
            cnt += 1;
        }
    }
    return cnt;
}


let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
let result2 = findLength(fruit_list)

console.log(result2);