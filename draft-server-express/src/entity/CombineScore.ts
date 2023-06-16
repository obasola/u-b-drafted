import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "CombineScore", synchronize: false })
export class CombineScore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fortyTime: number;

  @Column()
  tenYardSplit: number;

  @Column()
  twentyYard_shuttle: number;

  @Column()
  threeCone: number;

  @Column()
  verticalLeap: number;

  @Column()
  broadJump: number;

  @Column()
  playerId: number;
}
