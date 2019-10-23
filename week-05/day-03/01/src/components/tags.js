import React from 'react';
import { connect } from 'react-redux';

import { displayTags } from '../actions/tagActions';

function Tags({ tags }) {
    return (
        <>
            <div className="block-container">
                <h2>Tags</h2>
                {tags.map((tag, index) => 
                    <p key={'tagDisplay' + index}>{tag}</p>
                )}
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        tags: state.tagReducer
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        displayTags: () => dispatch(displayTags())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
