import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Pick", synchronize: false })
export class Pick {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamId: number;

  @Column()
  playerId: number;

  @Column()
  selectionRound: number;

  @Column()
  selectionNumber: number;

  @Column()
  selectionYear: string;

  @Column()
  selectionPickFrom: string;

  @Column()
  selectionPickTo: string;

  @Column()
  combineScore: number;
}
