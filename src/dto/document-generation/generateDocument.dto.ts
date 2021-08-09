import { IsNumber, IsNotEmpty, IsNotEmptyObject } from 'class-validator'

class DocumentData {
  [key: string]: string;
}

export class GenerateDocumentDto {
  @IsNumber()
  @IsNotEmpty()
  documentId: number;

  @IsNotEmptyObject()
  content: DocumentData;
}
