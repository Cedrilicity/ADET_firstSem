import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<import("mysql2").RowDataPacket[]>;
    getOne(id: string): Promise<import("mysql2").RowDataPacket>;
    update(id: string, body: any): Promise<import("mysql2").RowDataPacket>;
    remove(id: string): Promise<boolean>;
}
