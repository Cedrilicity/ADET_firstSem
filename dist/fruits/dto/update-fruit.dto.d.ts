import { CreateFruitDto } from './create-fruit.dto';
declare const UpdateFruitDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFruitDto>>;
export declare class UpdateFruitDto extends UpdateFruitDto_base {
    sweetness: number;
    sourness: number;
    spiciness: number;
    saltiness: number;
    bitterness: number;
}
export {};
