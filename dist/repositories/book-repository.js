"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../entities/book-entity");
class BookRepo {
    getAllBooks(page = 0, limit = 20) {
        return typeorm_1.getManager().getRepository(book_entity_1.Book).find({
            relations: ["authors"],
            take: limit,
            skip: (page * limit)
        });
    }
    getBook(id) {
        return typeorm_1.getManager().getRepository(book_entity_1.Book).findOneById(id, {
            relations: ["authors"]
        });
    }
    saveBook(book) {
        return typeorm_1.getManager().getRepository(book_entity_1.Book).save(book);
    }
    deleteBook(id) {
        return typeorm_1.getManager().getRepository(book_entity_1.Book).deleteById(id);
    }
}
exports.BookRepo = BookRepo;
//# sourceMappingURL=book-repository.js.map