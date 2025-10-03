// The purpose of this file is to define the structure of data required to update an existing fruit entry in the database.

import { PartialType } from '@nestjs/mapped-types';
import { CreateFruitDto } from './create-fruit.dto';
import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class UpdateFruitDto extends PartialType(CreateFruitDto) {
  @IsNumber()
  @Min(1)
  @Max(10)
  sweetness: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  sourness: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  spiciness: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  saltiness: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  bitterness: number;
}
