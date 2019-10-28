'use strict';

export const getMessageAction = (messages) => ({
    type: 'GET_MESSAGE',
    payload: {
        messages
    }
});

export function getMessage() {
    return async (dispatch) => {
        let response = await fetch('https://stream-vanadium.glitch.me/messages');
        let data = await response.json();
        dispatch(getMessageAction(data));
    }
}

export const sendMessageAction = (message) => ({
    type: 'SEND_MESSAGE',
    payload: {
        message
    }
});

export function sendMessage(user, text) {
    return async (dispatch) => {
        let response = await fetch("https://stream-vanadium.glitch.me/messages", {
            method: 'POST',
            body: JSON.stringify({
                "user": user,
                "text": text
            }),
            headers: {
                'content-type': 'application/json'
            },
        });
        let data = await response.json();
        dispatch(sendMessageAction([data]));
        dispatch(getMessage());
    }
}
