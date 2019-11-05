const getAllPostsAction = (posts) => ({
    type: "GET_ALL_POSTS",
    payload: {
        posts
    }
});

const getOnePostAction = (id) => ({
    type: "GET_ONE_POST",
    payload: {
        id
    }
});

const upVoteAction = (posts) => ({
    type: "UP_VOTE",
    payload: {
        posts
    }
});

const downVoteAction = (posts) => ({
    type: "DOWN_VOTE",
    payload: {
        posts
    }
})

export default {
    getAllPostsAction,
    getOnePostAction,
    upVoteAction,
    downVoteAction
}
