"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = require("../entities/book-entity");
const book_repository_1 = require("../repositories/book-repository");
const author_repository_1 = require("../repositories/author-repository");
const author_entity_1 = require("../entities/author-entity");
const class_validator_1 = require("class-validator");
const validation_1 = require("../helpers/validation");
exports.getAllBooks = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new book_repository_1.BookRepo();
    console.log("Received Books ==> GET");
    repo.getAllBooks(req.query.page, req.query.limit).then((result) => {
        res.send(result);
    });
});
exports.getBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new book_repository_1.BookRepo();
    console.log("Received Book ==> GET");
    repo.getBook(req.params.id).then((result) => {
        if (typeof result === 'undefined') {
            res.status(404).end();
        }
        else {
            res.send(result);
        }
    });
});
exports.saveBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new book_repository_1.BookRepo();
    let repoAuthor = new author_repository_1.AuthorRepo();
    console.log("Received Book ==> POST");
    let book = new book_entity_1.Book();
    book.id = req.body.id ? req.body.id : null;
    book.title = req.body.title;
    book.desc = req.body.desc;
    if (req.body.authors) {
        book.authors = [];
        yield Promise.all(req.body.authors.map((authorData) => __awaiter(this, void 0, void 0, function* () {
            if (authorData.name) {
                let author = new author_entity_1.Author();
                author.name = authorData.name;
                yield repoAuthor.getAuthorByName(authorData.name).then((existAuthor) => {
                    if (typeof existAuthor !== 'undefined') {
                        author = existAuthor;
                    }
                });
                book.authors.push(author);
            }
        })));
    }
    const errors = yield class_validator_1.validate(book);
    if (errors.length > 0) {
        res.send(validation_1.printValidationErrors(errors));
    }
    repo.saveBook(book).then((result) => {
        res.send(result);
    });
});
exports.deleteBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new book_repository_1.BookRepo();
    console.log("Received Book ==> DELETE");
    repo.deleteBook(req.params.id).then((result) => {
        res.send(result);
    });
});
//# sourceMappingURL=book-controller.js.map