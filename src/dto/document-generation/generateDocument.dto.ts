import { IsNumber, IsNotEmpty, IsNotEmptyObject } from 'class-validator'
import  { DocumentData } from '../../interfaces/documentData.interface'

export class GenerateDocumentDto {
  @IsNumber()
  @IsNotEmpty()
  templateId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNotEmptyObject()
  content: DocumentData;
}
