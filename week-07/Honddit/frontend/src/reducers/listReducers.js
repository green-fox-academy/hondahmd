let initState = [];

export const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return [
                ...action.payload.posts
            ];
        case 'UP_VOTE':
            return [
                ...action.payload.posts
            ]
        case 'DOWN_VOTE':
            return [
                ...action.payload.posts
            ]
        case 'SUBMIT_POST':
            return [
                ...action.payload.posts
            ]

        default:
            return state
    }
}

// export const backListReducer = (state = initState, action) => {
//     const actionsMap = new Map();
//     actionsMap.set('GET_ALL_POSTS', action.payload.posts);
//     actionsMap.set('UP_VOTE', action.payload.posts);
//     actionsMap.set('DOWN_VOTE', action.payload.posts);
//     actionsMap.set('SUBMIT_POST', action.payload.posts);
//     console.log(action.type);

//     return actionsMap.get(action.type);
// }

// function returnPosts(posts) {
//     return posts;
// }

export default listReducer;
