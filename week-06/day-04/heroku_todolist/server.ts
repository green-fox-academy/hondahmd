const express = require('express');

import {dispatchRequests} from './server/dispatchRequests';

// necessary variables for initing server
const server = express();
const PORT = 3000;

dispatchRequests(server);

server.listen(PORT);
