'use strict';

const tagReducer = (state = [], action) => {
    switch (action.type) {
        case 'DISPLAY_TAGS':
            return state;
        case 'ADD_TAG':
            if (state.indexOf(action.payload.tagName) === -1) {
                return [
                    ...state,
                    action.payload.tagName
                ]
            }
            return state;
        case 'REMOVE_TAG':
            if (state.indexOf(action.payload.tagName) !== -1) {
                // working code
                let newTags = new Array();
                state.forEach(tag => {
                    if (tag !== action.payload.tagName) {
                        newTags.push(tag);
                    }
                })
                return newTags;

                /* not working code
                state.splice(state.indexOf(action.payload.tagName, 1);
                return state;
                */
            }
            return state;
        case 'REMOVE_ALL':
            return [];
        default:
            return state;
    }
}

export default tagReducer;
