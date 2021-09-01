import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateChargeDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsNotEmpty()
  @IsString()
  paymentMethodId: string;

  @IsNotEmpty()
  @IsString()
  customerId: string;


  @IsNotEmpty()
  @IsString()
  currency: string;
}
