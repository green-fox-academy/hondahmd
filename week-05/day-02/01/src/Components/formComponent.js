import React, { useState } from 'react';
import { connect } from 'react-redux';

import { submitAction } from '../actions/index'

function FormComponent({ formDispatcher }) {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    function modifyInfo(propertyName, newData) {
        setUserInfo({
            ...userInfo,
            [propertyName]: newData 
        });
    }

    function handleInput(event) {
        const { name, value } = event.target;
        if (name === 'firstName') {
            modifyInfo('firstName', value);
        } else if (name === 'lastName') {
            modifyInfo('lastName', value);
        } else if (name === 'email') {
            modifyInfo('email', value);
        }
        event.preventDefault();
    }

    return (
        <>
            <form>
                <label>
                    First Name
                    <input type="text" name="firstName" onChange={handleInput} value={userInfo.firstName}/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" onChange={handleInput} value={userInfo.lastName}/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={handleInput} value={userInfo.email}/>
                </label>
                <button onClick={(event) => {formDispatcher(userInfo); event.preventDefault()}}>Submit</button>
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
