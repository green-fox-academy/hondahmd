import React from 'react';
import { connect } from 'react-redux';

import { decreaseAction } from '../actions/numberActions';

function Decreaser({ currentNumber, decreaseAction }) {
    return (
        <>
            <div className="block-container">
                <h2>Decreaser</h2>
                <p>{currentNumber}</p>
                <button onClick={decreaseAction}>Decrease</button>
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
        decreaseAction: () => dispatch(decreaseAction())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser);