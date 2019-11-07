const getAllPostsAction = (posts) => ({
    type: 'GET_ALL_POSTS',
    payload: {
        posts
    }
});

const voteAction = (post) => ({
    type: 'VOTE',
    payload: {
        post
    }
});

const deleteOnePostAction = (id) => ({
    type: 'DELETE_ONE_POST',
    payload: {
        id
    }
});

export default {
    getAllPostsAction,
    voteAction,
    deleteOnePostAction
}
