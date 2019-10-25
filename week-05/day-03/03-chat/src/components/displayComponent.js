import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMessage } from '../actions/messageActions';
import displayStyle from './displayComponents.module.css';

function DisplayComponent({ messages, getChatMessage }) {
    useEffect(() => {
        getChatMessage();
    }, []);

    return (
        <>
            <div className={displayStyle.messagesRoomContainer}>
                <h1>Chat Room</h1>
                {messages !== undefined && messages.messages.map((message, index) =>
                    <div className={displayStyle.messageBoxContainer} key={'messageBox ' + index}>
                        <div className={displayStyle.messageTitleContainer}>
                            <p className={displayStyle.messageName}>{message.user}</p>
                            <p>{message.createdAt}</p>
                        </div>
                        <div className={displayStyle.messageContentContainer}>
                            <p className={displayStyle.message}>{message.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

const mapStateToState = (state) => ({
    messages: state
});

const mapStateToProps = dispatch => ({
    getChatMessage: () => dispatch(getMessage())
});

export default connect(mapStateToState, mapStateToProps)(DisplayComponent);
