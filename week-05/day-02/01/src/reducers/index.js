'use strict';

export const formReducer = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return [
                ...state,
                action.payload
            ]
        case 'DISPLAY_USERS':
            return state;
        default: 
            return state;
    }
}
 