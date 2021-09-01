import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsNotEmpty()
  @IsString()
  paymentMethodId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;


  @IsNotEmpty()
  @IsString()
  currency: string;
}
