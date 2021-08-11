import { IsNumber, IsNotEmpty, IsNotEmptyObject } from 'class-validator'

class DocumentData {
  [key: string]: string;
}

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
