import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFridgeDto } from "src/fridge/dto/create-fridge.dto/create-fridge.dto";
import { UpdateFridgeDto } from "src/fridge/dto/update-fridge.dto/update-fridge.dto";
import { Fridge } from "src/fridge/fridge.entity";
import { Repository } from "typeorm";

@Injectable()
export class FridgeService {
  constructor(
    @InjectRepository(Fridge)
    private readonly fridgeRepository: Repository<Fridge>,
  ) {}
  findAll() {
    // const { limit, offset } = paginationQuery;
    return this.fridgeRepository.find();
  }
  async findOne(id: string) {
    const fridge = await this.fridgeRepository.findOne({
      where: { id: +id },
    });
    if (!fridge) {
      throw new NotFoundException(`Fridge ${id} not found`);
    }
    return fridge;
  }
  async create(createFridgeDto: CreateFridgeDto) {
    const fridge = this.fridgeRepository.create(createFridgeDto);
    return this.fridgeRepository.save(fridge);
  }
  async update(id: string, updateFridgeDto: UpdateFridgeDto) {
    const fridge = await this.fridgeRepository.preload({
      id: +id,
      ...updateFridgeDto,
    });
    if (!fridge) {
      throw new NotFoundException(`Fridge ${id} not found`);
    }
    return this.fridgeRepository.save(fridge);
  }
  async remove(id: string) {
    const fridge = await this.findOne(id);
    return this.fridgeRepository.remove(fridge);
  }
}
