import * as express from 'express';
import {routesDataAuthors} from "./authors-route";
import {routesDataBooks} from "./books-route";


export class BaseRouter {
    app: express.Application;
    constructor(app: express.Application) {
        this.app = app;
    }

    init() {
        var self = this;

        // book routes
        routesDataBooks.routes.map(function(routeData)  {
            self.app[routeData.method](routesDataBooks.rootPath+routeData.path, routeData.action);
        });


        // author routes
        routesDataAuthors.routes.map(function(routeData)  {
            self.app[routeData.method](routesDataAuthors.rootPath+routeData.path, routeData.action);
        });
    }
}