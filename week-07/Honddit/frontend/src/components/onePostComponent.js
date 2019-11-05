import React from 'react';

import componentStyle from './components.module.css';
import VoteComponent from './voteComponent';
import InfoComponent from './infoComponent';

function OnePostComponent(props) {
    return (
        <div className={componentStyle.postContainer}>
            <VoteComponent score={props.post.score} id={props.post.id}/>
            <InfoComponent info={props.post}/>
        </div>
    );
}

export default OnePostComponent;
