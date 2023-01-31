// 구구단

const n = 5;

let star = "";
// for (let i = 0; i<=n-1; i++) {
//     for(let j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star+="\n";
// }
// console.log(star)

for (let i=0; i < n; i++) {
    console.log(" ".repeat(n-i-1) + "*".repeat(i+1));
}