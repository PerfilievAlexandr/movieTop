const express = require('express');
const app = express();
const fs = require('fs');


app.get('/movies', (req, res) => {
    console.log('qweqweqwe');
    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        console.log('123123');
        res.end(data)
    });
});




app.use(express.json());
app.listen(3001);


