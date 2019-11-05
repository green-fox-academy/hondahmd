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

export const submitReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_POST':
            return state;

        default:
            return state;
    }
}

export default combineReducers({
    listReducer,
    submitReducer
});
