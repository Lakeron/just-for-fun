"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_entity_1 = require("../entities/author-entity");
const typeorm_1 = require("typeorm");
class AuthorRepo {
    getAllAuthors(page = 0, limit = 20) {
        return typeorm_1.getManager().getRepository(author_entity_1.Author).find({
            relations: ["books"],
            take: limit,
            skip: (page * limit)
        });
    }
    getAuthorByName(name) {
        return typeorm_1.getManager().getRepository(author_entity_1.Author).findOne({ where: { name: name } });
    }
    getAuthor(id) {
        return typeorm_1.getManager().getRepository(author_entity_1.Author).findOneById(id, {
            relations: ["books"]
        });
    }
    saveAuthor(author) {
        return typeorm_1.getManager().getRepository(author_entity_1.Author).save(author);
    }
    deleteAuthor(id) {
        return typeorm_1.getManager().getRepository(author_entity_1.Author).deleteById(id);
    }
}
exports.AuthorRepo = AuthorRepo;
//# sourceMappingURL=author-repository.js.map