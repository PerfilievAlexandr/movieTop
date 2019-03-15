const express = require('express');
const app = express();
const fs = require('fs');


app.get('/movies', (req, res) => {
    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        res.end(data)
    });
});

app.use(express.json());
app.listen(3001);


