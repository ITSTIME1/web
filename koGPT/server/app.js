// install package
var express = require("express");
var request = require("request");
var cors = require("cors")

var app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('front'));



// rest api
const max_tokens = 120;
const temperature = 1.0;
const top_p = 0.;
const n = 5;



// nodemon installed

// static file
// init
app.listen(3000, () => {
    console.log("start server and port is 3000.");   
    console.log("3000");

});

// post 요청의 대한 처리.
app.post('/result', (req, res) => {
    
    let prompt = req.body['key'];
    console.log("server received message : " + `${prompt}`);
    // 클라이언트로부터 받은 요청.
    let options = {
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
    
    // request koGPT API
    
    request.post(options, (error, response, body)=>{
        console.log(body);
        console.log(body.generations.text);
        console.log(body.generations[0].text);
        
        // okay 이렇게 보내면 되겠네
        if (body != null) {
            return res.json(body);
        }
    }); 
});

// request model continude....





