'use strict';

const numberReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return (Number(state) + 1)
        case 'DECREASE':
            return (Number(state) - 1)
        case 'RESET':
            return 0
        case 'SET':
            return (Number(action.payload.number))
        default:
            return (Number(state));
    }
}

export default numberReducer;
