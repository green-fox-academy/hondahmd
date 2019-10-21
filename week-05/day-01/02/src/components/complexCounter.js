import React from 'react';
import { connect } from 'react-redux';

import { complexCounter } from '../actions/allActions';

function ComplexCounter({ all, complexCounter }) {
    return (
        <>
            <div className="block-container">
                <h2>Complex Cpunter</h2>
                <p>{Number(all.numberReducer) + all.tagReducer.length}</p>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        all: state
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        complexCounter: () => dispatch(complexCounter())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplexCounter);
