import { IsString } from "class-validator";

export class UpdateFridgeDto {
  @IsString()
  readonly name?: string;
}
