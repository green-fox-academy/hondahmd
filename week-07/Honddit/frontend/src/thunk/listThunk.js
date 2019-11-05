import listActions from '../actions/listActions';

const server_location = 'http://127.0.0.1:8080';

function getAllStories() {
    return async (dispatch) => {
        const response = await fetch(`${server_location}/posts`);
        const data = await response.json();
        dispatch(listActions.getAllPostsAction(data));
    }
}

function upVote(id) {
    return async (dispatch) => {
        await fetch(`${server_location}/posts/${id}/upvote`, {
            'method': 'put',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        const response = await fetch(`${server_location}/posts`);
        const data = await response.json();
        dispatch(listActions.upVoteAction(data));
    }
}

function downVote(id) {
    return async (dispatch) => {
        await fetch(`${server_location}/posts/${id}/downvote`, {
            'method': 'put',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        const response = await fetch(`${server_location}/posts`);
        const data = await response.json();
        dispatch(listActions.downVoteAction(data));
    }
}

export default {
    getAllStories,
    upVote,
    downVote
}
