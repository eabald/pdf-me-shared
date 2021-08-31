import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStripeCustomerDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
