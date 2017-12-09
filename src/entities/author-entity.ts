import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Book} from "./book-entity";
import {IsDefined} from "class-validator/index";
import {IsString} from "class-validator/index";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined()
    @IsString()
    name: string;


    @ManyToMany(type => Book, book => book.authors)
    books: Book[];
}