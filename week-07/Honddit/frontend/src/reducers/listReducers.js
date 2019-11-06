import { combineReducers } from 'redux';

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

export default listReducer;
