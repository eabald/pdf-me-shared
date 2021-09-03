import { IsString, IsNotEmpty } from 'class-validator';

export class StripeWebhookDataDto {
  @IsNotEmpty()
  @IsString()
  signature: string;

  @IsNotEmpty()
  payload: Buffer;
}
