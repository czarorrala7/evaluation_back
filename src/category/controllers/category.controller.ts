import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Category } from "../entities/category.entity";
import { CategoryService } from "../services/category.services";

@Controller('api/category')
export class CategoryController extends BaseController<Category> {

    constructor(private readonly CategoryService: CategoryService) {
        super();
    }

    getService(): BaseService<Category> {
        return this.CategoryService;
    }

}