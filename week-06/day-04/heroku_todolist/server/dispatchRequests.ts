import {getRequest} from './getRequest';
import {postRequest} from './postRequest';
import {deleteRequest} from './deleteRequest';
import {putRequest} from './putRequest';

export const dispatchRequests = (server) => {
    getRequest(server);
    postRequest(server);
    deleteRequest(server);  
    putRequest(server);
}
