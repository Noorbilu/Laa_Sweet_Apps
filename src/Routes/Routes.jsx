import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import More from '../pages/More/More';
import Installed from '../pages/Installed/Installed';
import AppDetails from '../pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=> fetch('/data8.json'),
            path:'/',
            Component: Home
        },
        {
            path: '/more',
            Component: More,
            loader: () => fetch('/data20.json').then(res => res.json()),
        },
        {
            path: '/installed',
            Component: Installed,
            loader: async () => {
                const data8 = await fetch('/data8.json').then(res => res.json());
                const data20 = await fetch('/data20.json').then(res => res.json());
                    return { data8, data20 };
                }
        },
        {
            path: '/appDetails/:id',
            Component: AppDetails,
            loader: async () => {
                const data8 = await fetch('/data8.json').then(res => res.json());
                const data20 = await fetch('/data20.json').then(res => res.json());
                    return { data8, data20 };
                }
        }

    ]
  },
]);