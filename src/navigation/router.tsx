
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Search from '../pages/search';
import Landing from '../pages/landing';
import NotFound from './not-found';
import ReviewDetail from '../pages/review-detail';
import MyAccount from '../pages/my-account';
import Login from '../pages/login';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Landing />,
        // element: lazy(() => import("../pages/home")), //TODO: IMPLEMENT LAZY
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/review/:id",
        element: <ReviewDetail />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/my-account",
        element: <MyAccount />,
    },
    { 
        path: "*", 
        element: <NotFound /> 
    },
]

export { routes };