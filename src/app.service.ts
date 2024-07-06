import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getYo(): string {
    return "Yoooooooo World!";
  }
}
