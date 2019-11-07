import React from 'react';

import componentStyle from './components.module.css';

function InfoComponent(props) {
    const time = new Date();
    const unit = 1000 * 60 * 60;
    const username = 'anonymous';

    return (
        <div>
            <header className={componentStyle.infoTitle}><h2>{props.info.title}</h2></header>
            <article className={componentStyle.infoText}>
                submitted {Math.floor(((time.getTime() - props.info.timestamp) / unit))} hours ago by {username}
            </article>
        </div>
    );
}

export default InfoComponent;
