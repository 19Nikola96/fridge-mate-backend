import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "src/product/dto/create-product.dto/create-product.dto";
import { UpdateProductDto } from "src/product/dto/update-product.dto/update-product.dto";
import { Product } from "src/product/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  findAll() {
    // const { limit, offset } = paginationQuery;
    return this.productRepository.find();
  }
  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id: +id },
    });
    if (!product) {
      throw new NotFoundException(`product ${id} not found`);
    }
    return product;
  }
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id: +id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`product ${id} not found`);
    }
    return this.productRepository.save(product);
  }
  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}
