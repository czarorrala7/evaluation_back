import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Category } from "../entities/category.entity";
import { CategoryService } from "../services/category.services";
export declare class CategoryController extends BaseController<Category> {
    private readonly CategoryService;
    constructor(CategoryService: CategoryService);
    getService(): BaseService<Category>;
}
