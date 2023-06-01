
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Landing from '../pages/landing/landing';
import NotFound from './not-found';
// import Login from '../pages/login/login';
import Client from '../pages/client/client';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Landing />,
        // element: lazy(() => import("../pages/home")), //TODO: IMPLEMENT LAZY
    },
    {
        path: "/client",
        element: <Client />,
    },
    { 
        path: "*", 
        element: <NotFound /> 
    },
]

export { routes };