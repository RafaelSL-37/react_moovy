
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Search from '../pages/search/search';
import Landing from '../pages/landing/landing';
import NotFound from './not-found';
import Reviews from '../pages/reviews/reviews';
import MyAccount from '../pages/my-account/my-account';
import Login from '../pages/login/login';

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
        element: <Reviews />,
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