import queries from 'database/common';
import tools from './common/webTools';
import gVars from './common/globalVars';

function putRequests(server) {
    server.put('/posts/:id/upvote', (req, res)=> {
        tools.HANDLE_ERROE(upVote, req, res);
    });
    server.put('/posts/:id/downvote', (req, res) => {
        tools.HANDLE_ERROE(downVote, req, res);
    })
}

async function upVote(req, res) {
    vote(1, req, res);
}

function downVote(req, res) {
    vote(-1, req, res);
}

async function vote(operation, req, res) {
    const id = req.params.id;

    let checkResult = await queries.promiseQueryWithInput(`select id from ${gVars.storyTableName} where id=?`, [id]);
    if (checkResult[0] === undefined) {
        res.write("post not found!");
        res.status(404).send();
        return;
    }

    await queries.promiseQueryWithInput(
        `update ${gVars.storyTableName} set score=score+${operation} where id=?`, [id]
    );
    let response = await queries.promiseQueryNoInput(
        `select * from ${gVars.storyTableName} \
         where id=${id};`
    );
    res.status(200).send(response);
}

export default putRequests;
