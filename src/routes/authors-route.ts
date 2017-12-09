import * as AuthorController from "../controllers/author-controller"

export let routesDataAuthors = {
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
