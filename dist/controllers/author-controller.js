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
const author_repository_1 = require("../repositories/author-repository");
const author_entity_1 = require("../entities/author-entity");
const validation_1 = require("../helpers/validation");
const index_1 = require("class-validator/index");
exports.getAllAuthors = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new author_repository_1.AuthorRepo();
    console.log("Received Authors ==> GET");
    repo.getAllAuthors(req.query.page, req.query.limit).then((result) => {
        res.send(result);
    });
});
exports.getAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new author_repository_1.AuthorRepo();
    console.log("Received Author ==> GET");
    repo.getAuthor(req.params.id).then((result) => {
        if (typeof result === 'undefined') {
            res.status(404).end();
        }
        else {
            res.send(result);
        }
    });
});
exports.saveAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new author_repository_1.AuthorRepo();
    console.log("Received Author ==> POST");
    let author = new author_entity_1.Author();
    author.id = req.body.id ? req.body.id : null;
    author.name = req.body.name;
    const errors = yield index_1.validate(author);
    if (errors.length > 0) {
        res.send(validation_1.printValidationErrors(errors));
    }
    else {
        repo.saveAuthor(author).then((result) => {
            res.send(result);
        });
    }
});
exports.deleteAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let repo = new author_repository_1.AuthorRepo();
    console.log("Received Author ==> DELETE");
    repo.deleteAuthor(req.params.id).then((result) => {
        res.send(result);
    });
});
//# sourceMappingURL=author-controller.js.map