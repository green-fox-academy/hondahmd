import { promiseQueryNoInput } from './common/mysql';
import  webTools  from './common/webTools';
 
export const postRequest = server => {
    server.post('/api/todos', (req, res) => {
        try {
            webTools.HANDLE_DATA(req, res, insertIssue);
        } catch(error) {
            console.log(error);
        }
    });
}

async function insertIssue(body, res) {
    let request = JSON.parse(body);

    if (!webTools.CHECK_EMPTY(request.text, res)) return;
    await promiseQueryNoInput(`\
    insert into issues (id, text, done) \
    select ((select max(id) from issues)+1), "${request.text}", 0;`);
    res.status(201).send();
}
