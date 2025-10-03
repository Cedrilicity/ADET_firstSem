import { DatabaseService } from 'src/database/database.service';
import { RowDataPacket } from 'mysql2';
export declare class UsersService {
    private db;
    constructor(db: DatabaseService);
    private pool;
    findByUsername(username: string): Promise<RowDataPacket>;
    findById(id: number): Promise<RowDataPacket>;
    getAll(): Promise<RowDataPacket[]>;
    updateUser(id: number, partial: {
        username?: string;
        password: string;
        role?: string;
    }): Promise<RowDataPacket>;
    deleteUser(id: number): Promise<boolean>;
    setRefreshToken(id: number, refreshToken: string | null): Promise<void>;
    findByRefreshToken(refreshToken: string): Promise<RowDataPacket>;
}
