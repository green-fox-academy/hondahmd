import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { sendMessage, getMessage } from '../actions/messageActions';

// TODO: refresh the page after getting the response
function InputComponent({messages, sendUserMessage, getMessage}) {
    const [input, setInput] = useState('');

    useEffect(() => {
        getMessage();
    }, []);

    function handleInput(event) {
        setInput(event.target.value);
    }

    function handleClick(event) {
        sendUserMessage('Honda', input);
        event.preventDefault();
    }
    
    return (
        <>
            <div>
                <textarea onChange={handleInput} value={input}/>
                <button onClick={handleClick}>Submit</button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    messages: state
});

const mapDispatchToProps = (dispatch) => ({
    sendUserMessage: (user, text) => dispatch(sendMessage(user, text)),
    getMessage: () => dispatch(getMessage)
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
