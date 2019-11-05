import React from 'react';

import componentStyle from './components.module.css';
import VoteComponent from './voteComponent';

function OnePostComponent(props) {
    return (
        <div className={componentStyle.postStyle}>
            <VoteComponent score={props.post.score} id={props.post.id}/>
        </div>
    );
}

export default OnePostComponent;
