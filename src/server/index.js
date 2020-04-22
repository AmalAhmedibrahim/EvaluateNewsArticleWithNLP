var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser')



const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));
app.use(cors());

dotenv.config();


var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});




console.log(__dirname)




app.post("/result", (req, res) => {

    textapi.sentiment({ 'text': req.body.text }, function (err, result) {
        console.log(result);
        res.send(result);
    });
})


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
