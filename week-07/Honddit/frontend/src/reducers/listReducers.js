let initState = [];

export const listReducer = (state = initState, action) => {
    const reducers = new Map();
    reducers.set('GET_ALL_POSTS', getAllPosts);
    reducers.set('VOTE', vote);
    reducers.set('SUBMIT_POST', submitPost);
    reducers.set('DELETE_ONE_POST', deleteOnePost);
    if (reducers.has(action.type)) return reducers.get(action.type)(state, action);
    else return state;
}

function getAllPosts(state, action) {
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

function submitPost(state, action) {
    console.log(action.payload.post);
    return [
        ...state,
        action.payload.post
    ]
}

function deleteOnePost(state, action) {
    let newState = [];
    state.forEach(post => {
        if (post.id !== action.payload.id) newState.push(post);
    });
    return newState;
}

export default listReducer;
