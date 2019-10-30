const http = require('http');
const url = require('url');

const movies = require('./data');
const PORT = 3000;

let server = http.createServer((req, res) => {
    serverHandler(req, res);
});

server.listen(PORT);

function serverHandler(req, res) {
    const reqUrl = url.parse(req.url, true);
    const reqSequences = reqUrl.pathname.split('/');
    const id = reqSequences[reqSequences.indexOf('movies') + 1];

    if (reqUrl.pathname.indexOf('/movies') !== -1) {
        if (req.method === 'GET') getMoviesByGenre(reqUrl, res);
        else if (id !== undefined && req.method === 'GET') getMovieById(id, res);
        else if (id !== undefined && req.method === 'DELETE') deleteMovieById(id, res, req.headers.authorization);
        else if (req.method === 'POST') postMovie(req, res);
        else if (id !== undefined && req.method === 'PUT') updateMovie(req, res);
    }
}

function getMoviesByGenre(reqUrl, res) {
    if (reqUrl.query.genre === undefined) {
        res.statusCode = 200;
        res.end(JSON.stringify(movies));
        return;
    }
    let response = [];
    for (let movie of movies) {
        if (movie.genre === reqUrl.query.genre) {
            response.push(movie);
        }
    }

    res.statusCode = 200;
    res.end(JSON.stringify(response));
}

function getMovieById(id, res) {
    const foundMovie = movies.filter(movie => movie.id === Number(id));
    if (foundMovie.length === 1) {
        res.statusCode = 200;
        res.end(JSON.stringify(foundMovie));
    } else {
        res.statusCode = 404;
        res.end();
    }
}

function deleteMovieById(id, res, auth) {
    if (auth !== 'top-secret') {
        res.statusCode = 403;
        res.write("No right to delete!");
        res.end();
        return;
    }
    const foundMovie = movies.filter(movie => movie.id === Number(id));
    if (foundMovie.length === 0) {
        res.statusCode = 404;
        res.end();
    } else {
        movies.splice(Number(id) - 1, 1);
        console.log(movies);
        res.statusCode = 200;;
        res.end(JSON.stringify(foundMovie));
    }
}

function postMovie(req, res) {
    if (req.headers.authorization !== 'top-secret') {
        req.statusCode = 403;
        res.write('No right to post!');
        res.end();
        return;
    }
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        let receivedData = JSON.parse(body);
        let newMovie = {};
        receivedData['genre'] === undefined ? newMovie.genre = 'unknown' : newMovie.genre = receivedData['genre'];
        if (receivedData['title'] === undefined) {
            res.statusCode = 400;
            res.end();
            return;
        } else {
            newMovie.title = receivedData['title'];
        }
        if ((movies.filter(movie => movie.title === receivedData['title'])).length !== 0) {
            res.statusCode = 409;
            res.end();
            return;
        }
        let maxId = 0;
        movies.forEach(movie => {if(movie.id > maxId) maxId = movie.id;});
        newMovie.id = maxId + 1;
        movies.push(newMovie);
        res.statusCode = 200;
        res.end();
    })
}

function updateMovie(req, res) {
    if (req.headers.authorization !== 'top-secret') {
        req.statusCode = 403;
        res.write('No right to update!');
        res.end();
        return;
    }
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        let receivedData = JSON.parse(body);
        if (receivedData['id'] === undefined || receivedData['title'] === undefined || receivedData['genre'] === undefined) {
            res.statusCode = 400;
            res.end();
            return;
        }
        console.log('after id');
        let foundMovie = movies.filter(movie => movie.id === receivedData['id']);
        if (foundMovie.length === 0) {
            res.statusCode = 404;
            res.end();
            return;
        } else {
            movies.forEach((movie, index) => {
                if (movie.id === Number(receivedData['id'])) {
                    movies[index].title = receivedData['title'];
                    movies[index].genre = receivedData['genre'];
                }
            });
            res.statusCode = 200;
            res.end();
        }
    });
}
