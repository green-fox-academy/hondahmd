'use strict';

export const increaseAction = (number) => ({
    type: 'INCREASE',
    payload: {
        number
    }
});

export const decreaseAction = () => ({
    type: 'DECREASE'
});

export const resetAction = () => ({
    type: 'RESET'
});

export const setAction = (number) => {
    return ({
        type: 'SET',
        payload: {
            number
        }
    });
};
