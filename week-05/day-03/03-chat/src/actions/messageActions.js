'use strict';

export const getMessageAction = (messages) => ({
    type: 'GET_MESSAGE',
    payload: {
        messages
    }
});

export function getMessage() {
    return async (dispatch) => {
        let response = await fetch('https://stream-vanadium.glitch.me/messages')
        let data = await response.json();
        dispatch(getMessageAction(data));
    }
}
