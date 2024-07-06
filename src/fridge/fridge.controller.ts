import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateFridgeDto } from "src/fridge/dto/create-fridge.dto/create-fridge.dto";
import { UpdateFridgeDto } from "src/fridge/dto/update-fridge.dto/update-fridge.dto";
import { FridgeService } from "src/fridge/fridge.service";

@Controller("fridge")
export class FridgeController {
  constructor(private readonly fridgeService: FridgeService) {}
  @Get()
  findAll() {
    return this.fridgeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.fridgeService.findOne("" + id);
  }

  @Post()
  create(@Body() createFridgeDto: CreateFridgeDto) {
    return this.fridgeService.create(createFridgeDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateFridgeDto: UpdateFridgeDto) {
    return this.fridgeService.update(id, updateFridgeDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.fridgeService.remove(id);
  }
}
