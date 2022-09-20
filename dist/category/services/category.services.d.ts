import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Category } from "../entities/category.entity";
export declare class CategoryService extends BaseService<Category> {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    getRepository(): Repository<Category>;
}
