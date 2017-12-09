"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookController = require("../controllers/book-controller");
exports.routesDataBooks = {
    rootPath: '/book',
    routes: [
        /**
         * @swagger
         * /book:
         *   get:
         *     description: Get All books
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: page
         *         description: # of page
         *         required: false
         *         type: integer
         *         in: query
         *       - name: limit
         *         description: # of limit, default: 20
         *         required: false
         *         type: integer
         *         in: query
         *     responses:
         *       200:
         *         description: books
         */
        {
            method: "get",
            path: '/',
            action: BookController.getAllBooks
        },
        /**
         * @swagger
         * /book/{id}:
         *   get:
         *     description: Get book
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: id
         *         description: book ID
         *         required: true
         *         type: integer
         *         in: path
         *     responses:
         *       200:
         *         description: book
         */
        {
            method: "get",
            path: '/:id',
            action: BookController.getBook
        },
        {
            method: "post",
            path: '/',
            action: BookController.saveBook
        },
        {
            method: "delete",
            path: '/:id',
            action: BookController.deleteBook
        }
    ]
};
//# sourceMappingURL=books-route.js.map