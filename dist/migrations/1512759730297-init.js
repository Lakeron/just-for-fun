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
class init1512759730297 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `book` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `title` varchar(255) NOT NULL, `desc` text NOT NULL) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `author` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(255) NOT NULL) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `book_authors_author` (`bookId` int(11) NOT NULL, `authorId` int(11) NOT NULL, PRIMARY KEY(`bookId`, `authorId`)) ENGINE=InnoDB");
            yield queryRunner.query("ALTER TABLE `book_authors_author` ADD CONSTRAINT `fk_efabc613a3016328056f2a23b8b` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
            yield queryRunner.query("ALTER TABLE `book_authors_author` ADD CONSTRAINT `fk_a7f4a0f1e8029d94ecba771c13f` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `book_authors_author` DROP FOREIGN KEY `fk_a7f4a0f1e8029d94ecba771c13f`");
            yield queryRunner.query("ALTER TABLE `book_authors_author` DROP FOREIGN KEY `fk_efabc613a3016328056f2a23b8b`");
            yield queryRunner.query("DROP TABLE `book_authors_author`");
            yield queryRunner.query("DROP TABLE `author`");
            yield queryRunner.query("DROP TABLE `book`");
        });
    }
}
exports.init1512759730297 = init1512759730297;
//# sourceMappingURL=1512759730297-init.js.map