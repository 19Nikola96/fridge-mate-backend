import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Fridge } from "../fridge/fridge.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fridgeId: string;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @Column({ type: "date" })
  expirationDate: Date;

  @ManyToOne(() => Fridge, (fridge) => fridge.products)
  fridge: Fridge;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
