import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from '../pages/Landing';
import EventDate from '../pages/EventDate';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MySchedules from '../pages/MySchedules';
import SignUp from '../pages/SignUp';
import AvailableSchedule from '../pages/AvailableSchedule';


const Routes: React.FC = () => {
    return <Router>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signin" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/admin/event-date" exact component={EventDate} />
            <Route path="/aboutus" exact component={Home} />
            <Route path="/profile" exact component={MySchedules} />
            <Route path="/schedule" exact component={AvailableSchedule} />
        </Switch>
    </Router>
}

export default Routes;