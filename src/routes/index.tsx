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
import AdminShowPickedSchedules from '../pages/AdminShowPickedSchedules';


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <ReactDomRoute path="/aboutus" component={Home} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />

            <Route path="/all-schedule" exact isPrivate component={AdminShowPickedSchedules} />
            <Route path="/event-date" exact isPrivate component={EventDate} />
            <Route path="/profile" isPrivate component={MySchedules} />
            <Route path="/schedule" isPrivate component={AvailableSchedule} />
        </Switch>
    )
}

export default Routes;