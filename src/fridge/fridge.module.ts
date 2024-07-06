import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FridgeController } from "src/fridge/fridge.controller";
import { Fridge } from "src/fridge/fridge.entity";
import { FridgeService } from "src/fridge/fridge.service";

@Module({
  imports: [TypeOrmModule.forFeature([Fridge])],
  controllers: [FridgeController],
  providers: [FridgeService],
})
export class FridgeModule {}
