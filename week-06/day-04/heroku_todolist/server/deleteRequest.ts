import { promiseQueryNoInput } from './common/mysql';
import webTools from './common/webTools';

export const deleteRequest = server => {
    server.delete('/api/todos', (req, res) => {
        try{
            deleteIssue(req, res);
        } catch(error) {
            console.log(error);
        }
    });
}

async function deleteIssue(req, res) {
    
}
