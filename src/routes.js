import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
        </BrowserRouter>
    );
}

export default Routes;