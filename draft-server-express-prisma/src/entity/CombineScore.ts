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

  constructor(fortyTime: number, tenYardSplit: number, 
    twentyYard_shuttle: number, threeCone: number, 
    verticalLeap: number, playerId: number, broadJump: number  ) {
      this.fortyTime = fortyTime;
      this.tenYardSplit = tenYardSplit;
      this.twentyYard_shuttle = twentyYard_shuttle;
      this.threeCone = threeCone;
      this.verticalLeap = verticalLeap;
      this.playerId = playerId;
      this.broadJump = broadJump;
    }
}
