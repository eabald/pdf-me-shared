import { IsNumber, IsNotEmpty, IsNotEmptyObject } from 'class-validator'
import  { DocumentData } from '../../interfaces/documentData.interface'

export class DocumentDataDto {
  @IsNumber()
  @IsNotEmpty()
  templateId: number;

  @IsNotEmptyObject()
  content: DocumentData;
}
