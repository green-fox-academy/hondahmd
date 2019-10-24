const express = require('express');

const app = express();
const PORT = 3000;
const todos = [
    'travel to Whiterun',
    'use Fus\' Roh Dar to clear the weather',
    'talk to Serena about the Dawn Guard'
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('todos', {
        todos
    })
});

app.listen(PORT);
