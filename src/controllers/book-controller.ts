import { Request, Response } from "express";
import {Book} from "../entities/book-entity";
import {BookRepo} from "../repositories/book-repository";
import {AuthorRepo} from "../repositories/author-repository";
import {Author} from "../entities/author-entity";
import {validate} from "class-validator";
import {printValidationErrors} from "../helpers/validation";


export let getAllBooks = async (req:Request, res:Response) => {
    let repo:BookRepo = new BookRepo();

    console.log("Received Books ==> GET");

    repo.getAllBooks(req.query.page, req.query.limit).then((result:any) => {
        res.send(result);
    });

};


export let getBook = async (req:Request, res:Response) => {
    let repo:BookRepo = new BookRepo();

    console.log("Received Book ==> GET");

    repo.getBook(req.params.id).then((result:any) => {
        if(typeof result === 'undefined') {
            res.status(404).end();
        } else {
            res.send(result);
        }
    });

};

export let saveBook = async (req:Request, res:Response) => {
    let repo:BookRepo = new BookRepo();
    let repoAuthor:AuthorRepo = new AuthorRepo();

    console.log("Received Book ==> POST");


    let book:Book = new Book();
    book.id = req.body.id ? req.body.id : null;
    book.title = req.body.title;
    book.desc = req.body.desc;

    if(req.body.authors) {
        book.authors = [];
        await Promise.all(req.body.authors.map(async (authorData) => {
            if(authorData.name) {
                let author:Author = new Author();
                author.name = authorData.name;

                await repoAuthor.getAuthorByName(authorData.name).then((existAuthor:any) => {
                    if (typeof existAuthor !== 'undefined') {
                        author = existAuthor;
                    }
                });

                book.authors.push(author);
            }
        }));
    }

    const errors = await validate(book);
    if (errors.length > 0) {
        res.send(printValidationErrors(errors));
    }
    repo.saveBook(book).then((result:any) => {
        res.send(result);
    });
};


export let deleteBook = async (req:Request, res:Response) => {
    let repo:BookRepo = new BookRepo();

    console.log("Received Book ==> DELETE");

    repo.deleteBook(req.params.id).then((result:any) => {
        res.send(result);
    });

};