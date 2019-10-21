import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTag } from '../actions/tagActions';

function TagAdder({ addTag }) {
    const [inputTag, setInputTag] = useState([]);
    return (
        <>
            <div className="block-container">
                <h2>Add Tag</h2>
                <input value={inputTag} onChange={event => setInputTag(event.target.value)}/><br />
                <button onClick={() => {addTag(inputTag)}}>Add</button>
            </div>
        </>
    );
}

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => {
    return ({
        addTag: (tagName) => dispatch(addTag(tagName))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TagAdder);
