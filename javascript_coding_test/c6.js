// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

// 위와 같이 말의 개수가 구성되어져 있다고한다.

// 순서대로 킹 퀸 룩 비숍 나이트 폰의 개수가 주어졌다고 했을때
// 위의 개수를 맞추려면 몇개를 빼고 더해야 하는지를 출력해야 하는 문제이다.

const ori = [1, 1, 2, 2, 2, 8]
let arr = [2, 1, 2, 1, 2, 1]

// for (k in arr) {
//     console.log(arr[k]);
// }

let vrr = []
for (let i=0; i <= arr.length-1; i++) {
    if (arr[i] != ori[i]) {
        // 내가 가지고 있는 값이 더 작다면
        if (arr[i] < ori[i]) {
            let result = ori[i] - arr[i];
            vrr.push(result);
            // 내가 가지고 있는 값이 더 크다면
            // 빼야하는것이므로
        } else {
            let result2 = arr[i] - ori[i];
            result2.toString();
            vrr.push(parseInt("-"+result2));
        }
    } else if (arr[i] == ori[i]){
        vrr.push(0)
        continue
    }
}

console.log(vrr);