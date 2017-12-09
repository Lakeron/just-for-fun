import { getManager } from "typeorm";
import {Book} from "../entities/book-entity";

export class BookRepo {

    getAllBooks(page:number = 0, limit:number = 20) {
        return getManager().getRepository(Book).find({
            relations: ["authors"],
            take: limit,
            skip: (page*limit)
        });
    }

    getBook(id:number) {
        return getManager().getRepository(Book).findOneById(id, {
            relations: ["authors"]
        });
    }

    saveBook(book:Book) {
        return getManager().getRepository(Book).save(book);
    }

    deleteBook(id:number) {
        return getManager().getRepository(Book).deleteById(id);
    }

}