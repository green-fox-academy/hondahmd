import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';

import componentStyle from './components.module.css';
import HeaderComponent from './headerComponent';
import MainComponent from './mainComponent';
import SubmitComponent from './submitComponent';

function indexComponent() {
    return (
        <>
            <div className={componentStyle.container}>
                <HeaderComponent />
                <Router>
                    <Switch>
                        <Route exact path='/'><MainComponent /></Route>
                        <Route path='/submit'><SubmitComponent /></Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default indexComponent;
