import React from 'react';
import { Switch, Route } from "react-router-dom";

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
            <Route path="/admin/event-date" component={EventDate} />
            <Route path="/aboutus" component={Home} />
            <Route path="/profile" component={MySchedules} />
            <Route path="/schedule" component={AvailableSchedule} />
        </Switch>
    )
}

export default Routes;