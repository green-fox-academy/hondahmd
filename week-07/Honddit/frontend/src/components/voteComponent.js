import React from 'react';
import { connect } from 'react-redux';

import thunk from 'thunk/listThunk';
import upVoteIcon from './upvote.png';
import downVoteIcon from './downvote.png';

function VoteComponent(props) {
    function handleClick(event) {
        if (event.target.alt === 'upvote') {
            props.upVote(props.id);
        } else if (event.target.alt === 'downvote') {
            props.downvote(props.id);
        }
    }

    return (
        <div>
            <img src={upVoteIcon} onClick={handleClick} alt='upvote'/>
            <p>{props.score}</p>
            <img src={downVoteIcon} onClick={handleClick} alt='downvote'/>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state.listReducer
});

const mapDispatchToProps = dispatch => ({
    upVote: (id) => dispatch(thunk.upVote(id)),
    downvote: (id) => dispatch(thunk.downVote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteComponent);
