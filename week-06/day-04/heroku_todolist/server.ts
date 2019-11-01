const express = require('express');
const cors = require('cors');

import {dispatchRequests} from './server/dispatchRequests';
import {connection} from './server/common/mysql';

// prepare the db
connection.query('\
    create table if not exists issues (\
        Id integer PRIMARY KEY, \
        Text varchar(255), \
        Done tinyint);');

// necessary variables for initing server
const server = express();
const PORT = process.env.PORT;

server.use(cors());
server.use(express.static('public'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
dispatchRequests(server);

server.listen(PORT);
