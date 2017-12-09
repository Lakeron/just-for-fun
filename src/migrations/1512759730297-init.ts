import {MigrationInterface, QueryRunner} from "typeorm";

export class init1512759730297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `book` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `title` varchar(255) NOT NULL, `desc` text NOT NULL) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `author` (`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `name` varchar(255) NOT NULL) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book_authors_author` (`bookId` int(11) NOT NULL, `authorId` int(11) NOT NULL, PRIMARY KEY(`bookId`, `authorId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `book_authors_author` ADD CONSTRAINT `fk_efabc613a3016328056f2a23b8b` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `book_authors_author` ADD CONSTRAINT `fk_a7f4a0f1e8029d94ecba771c13f` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `book_authors_author` DROP FOREIGN KEY `fk_a7f4a0f1e8029d94ecba771c13f`");
        await queryRunner.query("ALTER TABLE `book_authors_author` DROP FOREIGN KEY `fk_efabc613a3016328056f2a23b8b`");
        await queryRunner.query("DROP TABLE `book_authors_author`");
        await queryRunner.query("DROP TABLE `author`");
        await queryRunner.query("DROP TABLE `book`");
    }

}
