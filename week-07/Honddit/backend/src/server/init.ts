import express = require('express');
import cors = require('cors');

import getRequests from './getRequests';
import postRequests from './postRequests';
import putRequests from './putRequests';

function initServer() {
    const server = express();
    const PORT = 8080;

    server.use(cors());
    getRequests(server);
    postRequests(server);
    putRequests(server);
    
    console.log('start server');
    server.listen(PORT);
}

export default initServer;
