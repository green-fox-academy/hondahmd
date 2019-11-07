let initState = [];

export const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return getAllPosts(action);
        case 'VOTE':
            return vote(state, action);
        case 'SUBMIT_POST':
            return [
                ...action.payload.posts
            ]

        default:
            return state
    }
}

function getAllPosts(action) {
    return action.payload.posts;
}

function vote(state, action) {
    let newState = [];
    state.forEach(post => {
        if (post.id === action.payload.post.id) newState.push(action.payload.post);
        else newState.push(post);
    });
    return newState;
}

export default listReducer;
