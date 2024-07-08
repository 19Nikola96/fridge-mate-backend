import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FridgeModule } from "./fridge/fridge.module";
import { ProductModule } from "src/product/product.module";
import { CommonModule } from "./common/common.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "password123",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true,
    }),
    FridgeModule,
    ProductModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
