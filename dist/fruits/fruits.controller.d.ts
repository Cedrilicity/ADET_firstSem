import { FruitsService } from './fruits.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
export declare class FruitsController {
    private readonly fruitsService;
    constructor(fruitsService: FruitsService);
    create(createFruitDto: CreateFruitDto): Promise<string>;
    findAll(): Promise<import("mysql2").RowDataPacket[]>;
    findOne(id: string): Promise<import("mysql2").RowDataPacket>;
    update(id: string, updateFruitDto: UpdateFruitDto): Promise<string>;
    remove(id: string): Promise<string>;
}
