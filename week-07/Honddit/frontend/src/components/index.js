import React from 'react';

import componentStyle from './components.module.css';
import HeaderComponent from './headerComponent';
import MainComponent from './mainComponent';

function indexComponent() {
    return (
        <>
            <div className={componentStyle.container}>
                <HeaderComponent />
                <MainComponent />
            </div>
        </>
    );
}

export default indexComponent;
