const getAllPostsAction = (posts) => ({
    type: "GET_ALL_POSTS",
    payload: {
        posts
    }
});

const upVoteAction = (post) => ({
    type: "UP_VOTE",
    payload: {
        post
    }
});

const downVoteAction = (post) => ({
    type: "DOWN_VOTE",
    payload: {
        post
    }
})

export default {
    getAllPostsAction,
    upVoteAction,
    downVoteAction
}
