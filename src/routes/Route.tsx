import React from 'react';
import { Redirect, Route as ReactDOMRoute, RouteProps } from "react-router-dom";

import { useAuth } from '../hooks/Auth';

interface IRouteProps extends RouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Routes: React.FC<IRouteProps> = ({ component: Component, isPrivate = false, ...rest }) => {
    const { user } = useAuth()
    return (
        <ReactDOMRoute {...rest}
            render={({ location }) => {
                return isPrivate === !!user
                    ? (
                        <Component />
                    )
                    : (
                        <Redirect to={{ pathname: isPrivate ? '/' : '/profile', state: { from: location } }} />
                    )
            }} />
    )
}

export default Routes;