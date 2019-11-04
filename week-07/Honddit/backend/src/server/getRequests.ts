import queries from 'database/common';
import tools from './common/webTools';

function getRequests(server) {
    server.get('/posts', (req, res) => {
        tools.HANDLE_ERROE(getAllPosts, req, res);
    });
}

async function getAllPosts(req, res) {
    const allPosts = await queries.promiseQueryNoInput(
        'select * from stories;'
    );
    res.send(allPosts);
}

export default getRequests;
