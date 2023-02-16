// install package
var express = require("express");
var request = require("request");
var cors = require("cors")

var app = express()
app.use(cors());


// rest api
const REST_API_KEY = '4c62bd862e78e1365f336d5a51e12cd3'
const urlString = 'https://api.kakaobrain.com/v1/inference/kogpt/generation';
const max_tokens = 32;
const temperature = 1.0;
const top_p = 1.0;
const n = 1;

var options = {
    host: "api.kakaobrain.com",
    uri: urlString,
    method: 'POST',
    // body 따로 받아야됨.
    body: {
        prompt: "조선시대 14대 왕은 어떤 사람이고, 무엇을 했을까",
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
});

// get front
app.get('/2000', (req, res) => {
    res.sendFile(__dirname + "/front/index.html");
});

// request.post(options, (error, response, body)=>{
//     console.log(body);
// });

