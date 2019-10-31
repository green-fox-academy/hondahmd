import {getRequest} from './getRequest';
import {postRequest} from './postRequest';

export const dispatchRequests = (server) => {
    getRequest(server);
    postRequest(server);
}
