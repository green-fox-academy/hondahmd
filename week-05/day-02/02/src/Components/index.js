import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import FormComponent from './formComponent';
import DisplayComponent from './displayComponent';

function App() {
    return (
        <>
            <Router>
                <div className="header">
                    <Link to='/'>form</Link>
                    <Link to='/userlist'>list</Link>
                </div>
                <Switch>
                    <Router path='/userlist'><DisplayComponent /></Router>
                    <Router path='/'><FormComponent /></Router>
                </Switch>
            </Router>
        </>
    )
}

export default App;
