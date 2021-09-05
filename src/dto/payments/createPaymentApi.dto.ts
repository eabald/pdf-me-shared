import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreatePaymentApiDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsNotEmpty()
  @IsString()
  paymentMethodId: string;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsString()
  currency: string;
}
