import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Pick", synchronize: false })
export class Pick {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamId: number;

  @Column()
  selectionRound: number;

  @Column()
  selectionNumber: number;

  @Column()
  selectionYear: string;

  @Column()
  selectionFrom: string;

  @Column()
  selectionSentTo: string;

  @Column()
  combineScore: number;
}
