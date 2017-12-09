"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const book_entity_1 = require("./book-entity");
const index_1 = require("class-validator/index");
const index_2 = require("class-validator/index");
let Author = class Author {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Author.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    index_1.IsDefined(),
    index_2.IsString(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => book_entity_1.Book, book => book.authors),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    typeorm_1.Entity()
], Author);
exports.Author = Author;
//# sourceMappingURL=author-entity.js.map