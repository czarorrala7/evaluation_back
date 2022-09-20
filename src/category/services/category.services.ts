import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Category } from "../entities/category.entity";


export class CategoryService extends BaseService<Category> {
    constructor(@InjectRepository(Category) private categoryRepo : Repository<Category>) {
        super();
    }
    
    getRepository(): Repository<Category> {
        return this.categoryRepo;
    }
}