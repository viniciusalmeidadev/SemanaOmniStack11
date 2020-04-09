import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Incident from './pages/Incident';
import Donations from './pages/bricadeira'

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route  path="/" exact component={Login}/>
            <Route  path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/incidents/new" component={NewIncident}/>
            <Route path="/incident/:id" component={Incident}/>
            <Route path="/donations" component={Donations}/>
        </Switch>
    </BrowserRouter>
    )
}