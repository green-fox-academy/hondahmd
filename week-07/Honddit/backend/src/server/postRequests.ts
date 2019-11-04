import queries from 'database/common';
import tools from './common/webTools';
import gVars from './common/globalVars';

function postRequests(server) {
    server.post('/posts', (req, res) => {
        tools.HANDLE_ERROE(postOnePostTrans, req, res);
    });
}

function postOnePostTrans(req, res) {
    tools.HANDLE_DATA(postOnePost, req, res);
}

async function postOnePost(body, req, res) {
    const request = JSON.parse(body);
    const time = new Date();
    const title = request.title;
    const url = request.url;
    
    if (!tools.CHECK_EMPTY(title, res) || 
        !tools.CHECK_EMPTY(url, res)) return;
    let sqlResult = await queries.promiseQueryNoInput(
        `insert into ${gVars.storyTableName} (title, url, timestamp, score) \
         select "${title}", "${url}", ${time.getTime()}, 0;`
    );
    let response = await queries.promiseQueryNoInput(
        `select * from ${gVars.storyTableName} \
         where id=${sqlResult.insertId};`
    );
    res.status(201).send(response);
}

export default postRequests;
