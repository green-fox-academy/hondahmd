import React from 'react';
import { connect } from 'react-redux';

import thunk from 'thunk/listThunk';
import upVoteIcon from './upvote.png';
import downVoteIcon from './downvote.png';
import componentStyle from './components.module.css';

function VoteComponent(props) {
    function handleClick(event) {
        props.vote(props.id, event.target.alt);
    }

    return (
        <div className={componentStyle.voteContainer}>
            <img src={upVoteIcon} onClick={handleClick} className={componentStyle.voteIcon} alt='upvote'/>
            <p className={componentStyle.voteScore}>{props.score}</p>
            <img src={downVoteIcon} onClick={handleClick} className={componentStyle.voteIcon} alt='downvote'/>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    vote: (id, operation) => dispatch(thunk.vote(id, operation))
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteComponent);
