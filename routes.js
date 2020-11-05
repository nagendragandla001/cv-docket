const routes = require('next-routes');

const myRoutes = routes();

const RoutesConstants = [
    {
        name: '',
        page: 'index',
        pattern: '',
        type: 'public'
    },
    {
        name: '/',
        page: 'index',
        pattern: '',
        type: 'public'
    },
    {
        name: 'home',
        pattern: '/home',
        page: 'home',
        type: 'public'
    },
    {
        name: 'About Us',
        pattern: '/aboutUs',
        page: 'aboutUs',
        type: 'public'
    },
    {
        name: 'Account',
        pattern: 'account/:id',
        page: 'account',
        type: 'private'
    },
    {
        name: 'Interviews',
        pattern: 'interviews',
        page: 'interviews',
        type: 'private'
    },
    {
        name: 'Jobs',
        pattern: 'jobs',
        page: 'jobs',
        type: 'private'
    }
];

RoutesConstants.forEach(route => myRoutes.add({...route}));

module.exports = myRoutes;