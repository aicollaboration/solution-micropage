import React from 'react';
import { isLoggedIn } from './storage';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ as: Comp, role, ...props }) => {
    const unAuthRoutes = ['/login'];
    return unAuthRoutes.indexOf(props.path) > -1 || isLoggedIn() ? (
        <>
                <Comp {...props} />
        </>
    ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    );
};
