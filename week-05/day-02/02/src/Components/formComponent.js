import React, { useState } from 'react';
import { connect } from 'react-redux';

import { submitAction } from '../actions/index'

function FormComponent({ formDispatcher }) {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: ''
    });
    const [buttonState, setButtonState] = useState({
        usernameCondition: false,
        passwordCondition: false,
        emailCondition: false
    });

    function modifyInfo(propertyName, newData) {
        setUserInfo({
            ...userInfo,
            [propertyName]: newData
        });
    }

    function modifyButtonState(propertyName, state) {
        setButtonState({
            ...buttonState,
            [propertyName]: state
        });
    }

    function handleInput(event) {
        const { name, value } = event.target;
        if (name === 'username') {
            modifyInfo('username', value);
            modifyButtonState('usernameCondition', value.length > 0);
        } else if (name === 'password') {
            modifyInfo('password', value);
            modifyButtonState('passwordCondition', value.length > 7);
        } else if (name === 'email') {
            modifyInfo('email', value);
            modifyButtonState('emailCondition', value.indexOf('@') !== -1);
        }
        
        event.preventDefault();
    }

    function handleSubmit(event) {
        formDispatcher(userInfo);
        event.preventDefault();
    }

    return (
        <>
            <form>
                <label>
                    Username
                    <input type="text" name="username" onChange={handleInput} value={userInfo.username} />
                </label>
                <label>
                    Password
                    <input type="text" name="password" onChange={handleInput} value={userInfo.password} />
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={handleInput} value={userInfo.email} />
                </label>
                <button onClick={handleSubmit} disabled={!(buttonState.usernameCondition && buttonState.passwordCondition && buttonState.emailCondition)}>Submit</button>
            </form>
        </>
    );
}

const mapStateToProps = state => ({
    userData: state
})

const mapDispatchToProps = dispatch => ({
    formDispatcher: (userData) => dispatch(submitAction(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
