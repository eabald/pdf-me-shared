import { IsString, IsNumber } from 'class-validator';

export class SaveApiKeyDto {
  @IsNumber()
  userId: number;

  @IsString()
  key:string;
}
