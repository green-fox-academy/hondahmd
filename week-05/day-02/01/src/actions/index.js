'use strict';

export const submitAction = (userData) => ({
    type: 'SUBMIT_FORM',
    payload: {
        lastName: userData.lastName,
        firstName: userData.firstName,
        email: userData.email
    }
});

export const displayAction = () => ({
    type: 'DISPLAY_USERS'
})
