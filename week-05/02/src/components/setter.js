import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setAction } from '../actions/numberActions';

function Setter({ setAction }) {
    const [inputNumber, setInputNumber] = useState(0);
    return (
        <>
            <div className="block-container">
                <h2>Setter</h2>
                <input value={inputNumber} onChange={event => setInputNumber(event.target.value)}/><br />
                <button onClick={() => {setAction(inputNumber)}}>Set</button>
            </div>
        </>
    );
}

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => {
    return ({
        setAction: (number) => dispatch(setAction(number))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Setter);
