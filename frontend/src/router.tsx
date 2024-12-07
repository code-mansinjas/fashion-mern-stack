import { createBrowserRouter } from "react-router-dom";
import React from "react";

const Home = React.lazy(()=> import('./pages/home/Home'))
const About = React.lazy(()=> import('./pages/About'))
const Contact = React.lazy(()=> import('./pages/Contact'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/contact-us',
        element: <Contact/>
    },
    {
        path: '/about-us',
        element: <About/>
    }
])

export default router