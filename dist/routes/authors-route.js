"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthorController = require("../controllers/author-controller");
exports.routesDataAuthors = {
    rootPath: '/author',
    routes: [
        {
            method: "get",
            path: '/',
            action: AuthorController.getAllAuthors
        },
        {
            method: "get",
            path: '/:id',
            action: AuthorController.getAuthor
        },
        {
            method: "post",
            path: '/',
            action: AuthorController.saveAuthor
        },
        {
            method: "delete",
            path: '/:id',
            action: AuthorController.deleteAuthor
        }
    ]
};
//# sourceMappingURL=authors-route.js.map