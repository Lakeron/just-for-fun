"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authors_route_1 = require("./authors-route");
const books_route_1 = require("./books-route");
class BaseRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        var self = this;
        // book routes
        books_route_1.routesDataBooks.routes.map(function (routeData) {
            self.app[routeData.method](books_route_1.routesDataBooks.rootPath + routeData.path, routeData.action);
        });
        // author routes
        authors_route_1.routesDataAuthors.routes.map(function (routeData) {
            self.app[routeData.method](authors_route_1.routesDataAuthors.rootPath + routeData.path, routeData.action);
        });
    }
}
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=_index.js.map