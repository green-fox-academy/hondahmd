import React from 'react';
import { connect } from 'react-redux';

import { resetAction } from '../actions/numberActions';

function Resetter({ resetAction }) {
    return (
        <>
            <div className="block-container">
                <h2>Resetter</h2>
                <button onClick={resetAction}>Reset</button>
            </div>
        </>
    );
}

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => {
    return ({
        resetAction: () => dispatch(resetAction())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetter);