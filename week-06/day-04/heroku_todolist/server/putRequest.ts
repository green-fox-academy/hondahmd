import { promiseQueryWithInput } from './common/mysql';
import webTools from './common/webTools';

export const putRequest = server => {
    server.put('/api/todos/:id', (req, res) => {
        try{
            webTools.HANDLE_DATA(req, res, putIssue);
        } catch(error) {
            console.log(error);
        }
    });
}

async function putIssue(body, req, res) {
    const putId = req.params.id;
    
    let checkResult = await promiseQueryWithInput('select id from issues where id=?', [putId]);
    if (checkResult[0] === undefined) {
        res.status(404).send();
        return;
    }

    const textContent = JSON.parse(body);
    promiseQueryWithInput('update issues set text=? where id=?', [textContent.text, putId]);
    res.status(200).send();
}