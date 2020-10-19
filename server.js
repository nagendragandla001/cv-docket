const next = require('next');
const cors = require('cors');
const compression = require('compression');
const express = require('express');

const routes = require('./routes');

const port = parseInt(process.env.port, 10) || 3000;
const app = next({dev: true});

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query);
});

const pingdom = (req, res, next) => {
    if(req.url.includes('pingdom')) {
        res.writeHead(200);
        res.end();
    } else {
        next();
    }
};

app.prepare().then(() => {
    const server = express();
    server.use(pingdom);
    server.use(pingdom);
    server.use(cors({ credentials: true, origin: true}));
    server.use(compression());
    server.use(handler);

    server.listen(port, (err) => {
        if(err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})