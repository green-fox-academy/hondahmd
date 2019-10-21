import React, { useState } from 'react';
import { connect } from 'react-redux';

import { removeAll } from '../actions/tagActions';

function TagAllRemover({ removeAll }) {
    return (
        <>
            <div className="block-container">
                <h2>Remove All Tags</h2>
                <button onClick={() => {removeAll()}}>Remove all</button>
            </div>
        </>
    );
}

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => {
    return ({
        removeAll: () => dispatch(removeAll())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TagAllRemover);
