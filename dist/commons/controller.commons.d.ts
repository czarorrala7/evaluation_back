import { BaseService } from "./service.commons";
export declare abstract class BaseController<T> {
    abstract getService(): BaseService<T>;
    findAll(): Promise<T[]>;
    findOne(id: any): Promise<T>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
    delete(id: any): Promise<void>;
    count(): Promise<number>;
    findAccess(user: any, pass: any): Promise<T>;
}
