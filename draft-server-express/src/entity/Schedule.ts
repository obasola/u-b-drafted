import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Schedule", synchronize: false })
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  teamID: number;
  @Column()
  opponentId: number;
  @Column()
  scheduleWeek: number;
  @Column()
  gameDate: Date;
  @Column()
  gameCity: string;
  @Column()
  gameStateProvince: string;
  @Column()
  gameCountry: string;
  @Column()
  gameLocation: string;
  @Column()
  opponentConference: string;
  @Column()
  opponentDivision: string;
  @Column()
  winLostFlag: string;
  @Column()
  homeOrAway: string;
}
