const express = require('express');

import {dispatchRequests} from './server/dispatchRequests';
import {connection} from './server/common/mysql';

// prepare the db
connection.query('\
    create table issues (\
        Id integer PRIMARY KEY, \
        Text varchar(255), \
        Done tinyint);');

// necessary variables for initing server
const server = express();
const PORT = process.env.PORT;

dispatchRequests(server);

server.listen(PORT);
