'use strict';

export const getMessageReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_MESSAGE':
            return {
                ...state,
                ...action.payload.messages
            };
        case 'SEND_MESSAGE':
            return {
                ...state,
                ...action.payload.message
            }
    }
}
