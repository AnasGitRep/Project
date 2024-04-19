import { BaseEntityDto } from "../Base/baseEntityDto";

export class TypesDto implements  BaseEntityDto {
  id: number;
  createDate: string;
  name: string | null;
}