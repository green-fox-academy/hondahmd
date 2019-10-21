import React from 'react';
import { connect } from 'react-redux';

import { increaseAction } from '../actions/numberActions';

function Increaser({ currentNumber, increaseAction }) {
    return (
        <>
            <div className="block-container">
                <h2>Increaser</h2>
                <p>{currentNumber}</p>
                <button onClick={increaseAction}>Increase</button>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return ({
        currentNumber: state.numberReducer
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        increaseAction: () => dispatch(increaseAction())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);
