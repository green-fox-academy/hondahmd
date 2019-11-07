let initState = [];

export const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return [
                ...action.payload.posts
            ];
        case 'UP_VOTE':
            return vote(state, action);
        case 'DOWN_VOTE':
            return vote(state, action);
        case 'SUBMIT_POST':
            return [
                ...action.payload.posts
            ]

        default:
            return state
    }
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
