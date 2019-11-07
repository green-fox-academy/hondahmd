const getAllPostsAction = (posts) => ({
    type: "GET_ALL_POSTS",
    payload: {
        posts
    }
});

const voteAction = (post) => ({
    type: "VOTE",
    payload: {
        post
    }
});

export default {
    getAllPostsAction,
    voteAction
}
