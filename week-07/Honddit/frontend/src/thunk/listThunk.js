import listActions from '../actions/listActions';

const server_location = 'http://127.0.0.1:8080';

function getAllStories() {
    return async (dispatch) => {
        const response = await fetch(`${server_location}/posts`);
        const data = await response.json();
        dispatch(listActions.getAllPostsAction(data));
    }
}

function vote(id, operation) {
    return async (dispatch) => {
        const response = await fetch(`${server_location}/posts/${id}/${operation}`, {
            'method': 'put',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (data[0]) dispatch(listActions.voteAction(data[0]));
        else alert('The post does not exist, please refresh the page.');
    }
}

export default {
    getAllStories,
    vote
}
