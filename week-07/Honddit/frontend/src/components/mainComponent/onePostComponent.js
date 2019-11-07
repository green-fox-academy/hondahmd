import React from 'react';

import componentStyle from './components.module.css';
import VoteComponent from './voteComponent';
import InfoComponent from './infoComponent';
import DeleteComponent from './deletePostComponent';

function OnePostComponent(props) {
    return (
        <div className={componentStyle.postContainer}>
            <div className={componentStyle.postInfoContainer}>
                <VoteComponent score={props.post.score} id={props.post.id} />
                <InfoComponent info={props.post} />
            </div>
            <div className={componentStyle.deleteContainer}>
                <DeleteComponent id={props.post.id} />
            </div>
        </div>
    );
}

export default OnePostComponent;
