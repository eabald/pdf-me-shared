import { IsString, IsNumber } from 'class-validator';

export class UpdateTemplateDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  content: string;

  @IsNumber()
  public ownerId: number;
}
