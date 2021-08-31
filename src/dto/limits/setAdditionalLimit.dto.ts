import { IsNumber, IsNotEmpty, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class SetAdditionalLimitDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsDate()
  @Transform(value => (value || null))
  extraValidTo: Date | null;
}
