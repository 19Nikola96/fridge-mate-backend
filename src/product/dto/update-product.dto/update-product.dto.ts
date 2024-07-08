import { IsString } from "class-validator";

export class UpdateProductDto {
  @IsString()
  readonly name?: string;
}
