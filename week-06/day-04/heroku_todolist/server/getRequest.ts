import { promiseQueryNoInput } from './common/mysql';

export const getRequest = (server) => {
    server.get('/api/todos', async (req, res) => {
        try {
            let result = await promiseQueryNoInput(`select * from issues`);
            res.status(200).send(result);
        } catch(error) {
            console.log(error);
        }
    });
}
