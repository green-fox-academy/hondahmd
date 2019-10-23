import React, { useState } from 'react';
import { connect } from 'react-redux';

import { increaseAction } from '../actions/numberActions';

function delayIncrease(number, delay) {
    return async (dispatch) => {
        let data = await new Promise(resolve => {
            setTimeout(() => {
                resolve(number);
            }, delay);
        })
        dispatch(increaseAction(data));
    }
}

function Increaser({ currentNumber, delayIncrease }) {
    const [inputNumber, setInputNumber] = useState(0);
    const [inputDelay, setInputDelay] = useState(0);
    
    function handleInput(event) {
        const {name, value} = event.target;
        if (name === 'inputNumber') {
            setInputNumber(Number(value));
        } else if (name === 'inputDelay') {
            setInputDelay(Number(value));
        }
    }

    function handleClick(event) {
        delayIncrease(inputNumber, inputDelay);
        event.preventDefault();
    }

    return (
        <>
            <form className="block-container">
                <h2>Increaser</h2>
                <p>{currentNumber}</p>
                <label><p>Number:</p><input name="inputNumber" type="text" value={inputNumber} onChange={handleInput}/></label>
                <label><p>Delay:</p><input name="inputDelay" type="text" value={inputDelay} onChange={handleInput}/></label>
                <button onClick={handleClick} type="submit">Increase</button>
            </form>
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
        delayIncrease: (number, delay) => dispatch(delayIncrease(number, delay))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);
