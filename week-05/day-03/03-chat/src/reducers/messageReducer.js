'use strict';

export const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_MESSAGE':
            return {
                ...state,
                ...action.payload.messages
            };
    }
}
