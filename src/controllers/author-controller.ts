import { Request, Response } from "express";
import { AuthorRepo } from "../repositories/author-repository";
import {Author} from "../entities/author-entity";
import {printValidationErrors} from "../helpers/validation";
import {validate} from "class-validator/index";


export let getAllAuthors = async (req:Request, res:Response) => {
    let repo:AuthorRepo = new AuthorRepo();

    console.log("Received Authors ==> GET");

    repo.getAllAuthors(req.query.page, req.query.limit).then((result: any) => {
        res.send(result);
    });

};

export let getAuthor = async (req:Request, res:Response) => {
    let repo:AuthorRepo = new AuthorRepo();

    console.log("Received Author ==> GET");

    repo.getAuthor(req.params.id).then((result: any) => {
        if(typeof result === 'undefined') {
            res.status(404).end();
        } else {
            res.send(result);
        }
    });

};

export let saveAuthor = async (req:Request, res:Response) => {
    let repo: AuthorRepo = new AuthorRepo();

    console.log("Received Author ==> POST");

    let author:Author = new Author();
    author.id = req.body.id ? req.body.id : null;
    author.name = req.body.name;

    const errors = await validate(author);
    if (errors.length > 0) {
        res.send(printValidationErrors(errors));
    } else {
        repo.saveAuthor(author).then((result:any) => {
            res.send(result);
        });
    }
};

export let deleteAuthor = async (req:Request, res:Response) => {
    let repo:AuthorRepo = new AuthorRepo();

    console.log("Received Author ==> DELETE");

    repo.deleteAuthor(req.params.id).then((result: any) => {
        res.send(result);
    });

};