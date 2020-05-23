// Imports
import React from 'react'

// App Imports
import LoginPage from './Containers/LoginPage/index'
import DashboardPage from './Containers/Dashboard/index'
import Home from './Containers/Home/index'
// Routes
const routes = [
    {
        path: '/',
        component: LoginPage,
        exact: true
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        exact: true
    },
    {
        path: '/?params:',
        component: Error,
    },
]

export default routes
