import { combineReducers } from 'redux';

let allState = [];

export const listReducer = (state = allState, action) => {
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

        default:
            return state
    }
}

export const postReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ONE_POST':
            return allState.filter(post => post.id === action.payload.id)[0];

        default:
            return state;
    }
}

export default combineReducers({
    listReducer,
    postReducer
});
