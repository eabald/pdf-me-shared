import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsNumber()
  public productId: number;

  @IsNotEmpty()
  @IsNumber()
  public userId: number;

  @IsNotEmpty()
  @IsNumber()
  public paymentId: number;
}
