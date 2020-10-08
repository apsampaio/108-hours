import React from 'react';
import { Switch, Route as ReactDomRoute } from "react-router-dom";

import Route from './Route'
import Landing from '../pages/Landing';
import EventDate from '../pages/EventDate';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MySchedules from '../pages/MySchedules';
import SignUp from '../pages/SignUp';
import AvailableSchedule from '../pages/AvailableSchedule';


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/admin/event-date" isPrivate component={EventDate} />
            <ReactDomRoute path="/aboutus" component={Home} />
            <Route path="/profile" isPrivate component={MySchedules} />
            <Route path="/schedule" isPrivate component={AvailableSchedule} />
        </Switch>
    )
}

export default Routes;