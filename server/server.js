const express = require('express');
const app = express();
const fs = require('fs');

function writeObj(data, url) {
    fs.writeFile(
        __dirname + url,
        JSON.stringify(data),
        {"encoding": "utf8"},
        () => {}
    );
};


app.get('/movies', (req, res) => {
    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        return setTimeout(() => res.end(data), 2000)
    });
});

app.get('/comments', (req, res) => {
    fs.readFile(`${__dirname}/comments.json`, 'utf8', (err, data) => {
        return setTimeout(() => res.end(data), 2000)
    });
});

app.post('/add-comments', (req, res) => {
    fs.readFile(`${__dirname}/comments.json`, 'utf8', (err, data) => {
        const newComment = JSON.parse(data);
        newComment.push(req.body);
        writeObj(newComment, '/comments.json');
    });

    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        //const newComment = JSON.parse(data);
        newComment.push(req.body);
        writeObj(newComment, '/movies.json');
    });
});



app.use(express.json());
app.listen(3001);


