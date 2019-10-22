import React from 'react';
import { connect } from 'react-redux';

import { displayAction } from '../actions/index';

function DisplayComponent({ userInfoList }) {
    return (
        <>
            <ul>
                {userInfoList.map(userInfo => 
                    <li>{`First Name: ${userInfo.firstName}  Last Name: ${userInfo.lastName}  Email: ${userInfo.email}`}</li>
                )}
            </ul>
        </>
    );
}

const mapStateToProps = state => ({
    userInfoList: state
});

const mapDispatchToProps = dispatch => ({
    userInfoDispatcher: () => dispatch(displayAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
