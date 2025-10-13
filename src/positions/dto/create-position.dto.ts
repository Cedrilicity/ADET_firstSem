import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePositionDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
