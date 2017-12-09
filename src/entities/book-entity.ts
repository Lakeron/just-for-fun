import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Author} from "./author-entity";
import {Length, IsString, IsArray, ArrayNotEmpty, IsDefined} from "class-validator";
import {ArrayContains} from "class-validator/index";
import {ValidateNested} from "class-validator/index";


@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1,255)
    title: string;

    @Column("text")
    @IsDefined()
    @IsString()
    desc: string;


    @ManyToMany(type => Author, author => author.books, {
        cascadeInsert: true,
    })
    @ArrayNotEmpty()
    @JoinTable()
    authors: Author[];

}