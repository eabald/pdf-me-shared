import { IsNumber, IsNotEmpty, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class SetSubscriptionLimitDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsNumber()
  @IsNotEmpty()
  limitPerHour: number;

  @IsDate()
  @IsNotEmpty()
  extraValidTo: Date;
}
