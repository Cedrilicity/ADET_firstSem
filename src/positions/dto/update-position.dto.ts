import { PartialType } from '@nestjs/mapped-types';
import { CreatePositionDto } from './create-position.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdatePositionDto extends PartialType(CreatePositionDto) {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
