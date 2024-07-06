import { IsString } from "class-validator";

export class CreateFridgeDto {
  @IsString()
  readonly name: string;
}
