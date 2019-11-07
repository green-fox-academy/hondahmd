import queries from 'database/common';
import tools from './common/webTools';
import gVars from './common/globalVars';

function deleteRequests(server) {
    server.delete('/posts/:id', (req, res) => {
        tools.HANDLE_ERROE(deleteOnePost, req, res);
    });
}

async function deleteOnePost(req, res) {
    const deleteId = req.params.id;

    const deletePost = await queries.promiseQueryWithInput(`select * from ${gVars.storyTableName} where id=?`, [deleteId]);
    if (deletePost.length === 0) {
        res.write('no such post id');
        res.status(404).send();
        return;
    }
    await queries.promiseQueryWithInput(`delete from ${gVars.storyTableName} where id=?`, [deleteId]);
    res.status(204).send(deletePost);
}

export default deleteRequests;
