// The purpose of this file is to define the structure of data required to create a new fruit entry in the database.

import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateFruitDto {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  @Min(0)
  weight: number;

  @IsString()
  origin: string;
}
