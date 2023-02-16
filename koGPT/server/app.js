// install package
var express = require("express");
var request = require("request");
var cors = require("cors")

var app = express()
app.use(cors());
app.use(express.urlencoded({extended: true})) 



// rest api
const REST_API_KEY = '4c62bd862e78e1365f336d5a51e12cd3'
const urlString = 'https://api.kakaobrain.com/v1/inference/kogpt/generation';
const max_tokens = 100;
const temperature = 1.0;
const top_p = 0.;
const n = 3;
const prompt = "인천~뉴욕 구간의 프레스티지석을 보너스 항공권으로 구매하려면 종전에는 편도 6만 2천500마일이 필요했지마느 개편안이 시행되면 9만 마일이 필요합니다. 한줄 요약: "
var options = {
    host: "api.kakaobrain.com",
    uri: urlString,
    method: 'POST',
    // body 따로 받아야됨.
    body: {
        prompt: prompt,
        max_tokens: max_tokens,
        temperature: temperature,
        top_p: top_p,
        n: n
    },
    json: true,
    headers: {
        'Authorization': 'KakaoAK ' + REST_API_KEY,
        'Content-Type': 'application/json',
    }
};


// nodemon installed

// static file
app.use(express.static('front'));
// init
app.listen(3000, () => {
    console.log("start server and port is 3000.");   
    console.log("3000");

});

// get front
app.get('/2000', (req, res) => {
    res.sendFile(__dirname + "/front/index.html");
    // request.post(options, (error, response, body)=>{
    //     console.log(body);
    // });
});


// post 요청의 대한 처리.
app.post('/result', (req, res) => {
    // 클라이언트로부터 받은 요청.
    console.log(req.body);
    res.sendFile(__dirname + "/front/result.html");
});

// request model continude....





