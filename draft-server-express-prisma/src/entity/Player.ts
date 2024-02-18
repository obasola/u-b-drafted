import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Player", synchronize: false })
export class Player {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column()
  height: number;
  @Column()
  weight: number;
  @Column()
  handSize: number;
  @Column()
  armLength: number;
  @Column()
  homeCity: string;
  @Column()
  homeState: string;
  @Column()
  university: string;
  @Column()
  pickId: number;
  @Column()
  position: string;
}
