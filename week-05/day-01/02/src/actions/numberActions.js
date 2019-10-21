'use strict';

export const increaseAction = () => ({
    type: 'INCREASE'
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
