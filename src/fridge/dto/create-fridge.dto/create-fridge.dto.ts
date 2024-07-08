import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFridgeDto {
  @ApiProperty({ description: "The name of the fridge" })
  @IsString()
  readonly name: string;
}
