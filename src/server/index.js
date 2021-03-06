const express = require('express');
const routers = require('../routes');

const { ErrorMiddleware } = require("../middlewares");
class Server {

    constructor(){
        console.log("Initializing server...");

        // init app
        this._app = express();

        // init app level middlewares
        this.initMiddlewares();

        // init routers
        this._routers = routers;
        this.initRouters();

        // Setting error middleware
        this._app.use(ErrorMiddleware);

    }

    start = () => {
        this._app.listen(process.env.PORT, () => {
            console.log(`${process.env.APP_NAME} running on port ${process.env.PORT}`);
        })
    }

    initMiddlewares = () => {
        console.log("Initializing middlewares...");
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(express.json());

    }

    initRouters = () => {
        console.log("Initializing routes...");
        this._app.use("/mutation", this._routers.MutationRoutes);
        this._app.use("/stats", this._routers.StatsRoutes);
    }
}

module.exports = Server;