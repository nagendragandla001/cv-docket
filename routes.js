const routes = require('next-routes');

const myRoutes = routes();

const RoutesConstants = [
    {
        name: '',
        page: 'index',
        type: 'public'
    },
    {
        name: 'home',
        page: 'home',
        type: 'public'
    }
];

RoutesConstants.forEach(route => myRoutes.add({...route}));

module.exports = myRoutes;