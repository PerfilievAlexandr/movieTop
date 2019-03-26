const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path')

app.use(express.json());
app.use(bodyParser.json());

function writeObj(data, url) {
    fs.writeFile(
        __dirname + url,
        JSON.stringify(data),
        {"encoding": "utf8"},
        () => {}
    );
}


app.get('/movies', (req, res) => {
    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        return setTimeout(() => res.end(data), 500)
    });
});

app.get('/comments', (req, res) => {
    fs.readFile(`${__dirname}/comments.json`, 'utf8', (err, data) => {
        return setTimeout(() => res.end(data), 500)
    });
});

app.post('/add-comments', (req, res) => {
    fs.readFile(`${__dirname}/comments.json`, 'utf8', (err, data) => {
        const commentsData = JSON.parse(data);
        const newComment = req.body.comment;
        newComment.id = req.body.randomId;
        commentsData.push(newComment);
        writeObj(commentsData, '/comments.json');
        res.end(JSON.stringify(newComment));
    });

    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        const moviesData = JSON.parse(data);
        let movieToReplaceIndex = null;
        const currentMovie = moviesData.filter((movie, index) => {
            if (movie.id === req.body.selectedMovieId) {
                movieToReplaceIndex = index;
                return movie
            }
        });
        currentMovie[0].comments.push(req.body.randomId);
        moviesData[movieToReplaceIndex] = currentMovie[0];
        writeObj(moviesData, '/movies.json');
    });
});

app.delete('/delete-comment', (req, res) => {
    fs.readFile(`${__dirname}/comments.json`, 'utf8', (err, data) => {
        const commentsData = JSON.parse(data);
        const index = commentsData.findIndex((comment) => {
            return comment.id === req.body.id;
        });
        commentsData.splice(index, 1);

        writeObj(commentsData, '/comments.json');
        res.end(JSON.stringify(req.body.id))
    });

    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        const moviesData = JSON.parse(data);
        moviesData.forEach((movie) => {
            if (movie.id === req.body.parentId) {
                const indexOfReqComment = movie.comments.indexOf(req.body.id);
                movie.comments.splice(indexOfReqComment, 1);
            }
        });
        writeObj(moviesData, '/movies.json');
    });
});

// app.post('/add-movie', (req, res) => {
//     fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
//         const movies = JSON.parse(data);
//         const newMovie = req.body.movie;
//         console.log(newMovie);
//         newMovie.id = req.body.randomMovieId;
//         newMovie.comments = [];
//         newMovie.style = [];
//         const newListMovies = movies.concat(newMovie)
//         writeObj(newListMovies, '/movies.json');
//         res.end(JSON.stringify(newListMovies));
//     });
// });

app.post('/add-movie', (req, res) => {
    const storage = multer.diskStorage({
        destination: './uploads',
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    });

    const upload = multer({
        storage: storage
    }).array('movieFields');


    upload(req, res, (err) => {
        console.log(req.body, 'body');
        console.log(req.files, 'files');
    });
    res.end('');
});


app.delete('/delete-movie', (req, res) => {
    fs.readFile(`${__dirname}/movies.json`, 'utf8', (err, data) => {
        const moviesList = JSON.parse(data);
        const deleteMovieId = req.body.movieId;
        const newMovieList = moviesList.filter((movie) => {
            return movie.id !== deleteMovieId
        });
        writeObj(newMovieList, '/movies.json');
        res.end(JSON.stringify(newMovieList));
    })
});



const port = 3001;
app.listen(port, () => {
    console.log(`listen port ${port}`);
});