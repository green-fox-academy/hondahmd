import React from 'react';
import { connect } from 'react-redux';

import { removeTag } from '../actions/tagActions';

function TagRemover({ tags, removeTag }) {
    return (
        <>
            <div className="block-container">
                <h2>Remove Tag</h2>
                {tags.map((tag, index) => 
                    <p key={'tag' + index} onClick={event => {removeTag(event.target.textContent)}}>{tag}</p>    
                )}
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        tags: state.tagReducer
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        removeTag: (tagName) => dispatch(removeTag(tagName))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TagRemover);
