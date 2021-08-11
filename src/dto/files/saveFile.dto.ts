import { IsNumber, IsString, IsNotEmpty } from 'class-validator'

export class SaveFileDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  file: Buffer;
}
