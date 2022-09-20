"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    findAll() {
        return this.getRepository().find();
    }
    findOne(id) {
        return this.getRepository().findOne(id);
    }
    save(entity) {
        return this.getRepository().save(entity);
    }
    saveMany(entities) {
        return this.getRepository().save(entities);
    }
    async delete(id) {
        await this.getRepository().delete(id);
    }
    count(options) {
        return this.getRepository().count(options);
    }
    findAccess(user, pass) {
        return this.getRepository().findOne(user, pass);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.commons.js.map