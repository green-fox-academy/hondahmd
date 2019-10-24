'use strict';

const express = require('express');

const server = express();
const PORT = 3000;
const fileName = '/index.html';

server.use(express.static('assets'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + fileName);
});

server.listen(PORT);
