import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { DatabaseService } from 'src/database/database.service';
import { RowDataPacket } from 'mysql2';
export declare class FruitsService {
    private db;
    constructor(db: DatabaseService);
    private pool;
    create(createFruitDto: CreateFruitDto): Promise<string>;
    findAll(): Promise<RowDataPacket[]>;
    findOne(id: number): Promise<RowDataPacket>;
    update(id: number, updateFruitDto: UpdateFruitDto): Promise<string>;
    remove(id: number): Promise<string>;
}
