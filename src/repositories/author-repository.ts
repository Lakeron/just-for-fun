import { Author } from "../entities/author-entity";
import { getManager, getRepository } from "typeorm";

export class AuthorRepo {

    getAllAuthors(page:number = 0, limit:number = 20) {
        return getManager().getRepository(Author).find({
            relations: ["books"],
            take: limit,
            skip: (page*limit)
        });
    }

    getAuthorByName(name:string) {
        return getManager().getRepository(Author).findOne({where: {name: name}});
    }

    getAuthor(id:number) {
        return getManager().getRepository(Author).findOneById(id, {
            relations: ["books"]
        });
    }

    saveAuthor(author:Author) {
        return getManager().getRepository(Author).save(author);
    }

    deleteAuthor(id:number) {
        return getManager().getRepository(Author).deleteById(id);
    }
}