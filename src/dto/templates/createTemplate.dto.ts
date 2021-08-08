import { IsString, IsNumber } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  name: string;

  @IsString()
  content: string;

  @IsNumber()
  public ownerId: number;
}
