import { promiseQueryWithInput } from './common/mysql';

export const deleteRequest = server => {
    server.delete('/api/todos/:id', (req, res) => {
        try{
            deleteIssue(req, res);
        } catch(error) {
            console.log(error);
        }
    });
}

async function deleteIssue(req, res) {
    const deleteId = req.params.id;
    
    let checkResult = await promiseQueryWithInput('select id from issues where id=?', [deleteId]);
    if (checkResult[0] === undefined) {
        res.status(404).send();
        return;
    }
    promiseQueryWithInput(`delete from issues where id=?`, [deleteId]);
    res.status(204).send();
}
