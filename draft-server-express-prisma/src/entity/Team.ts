import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "Team", synchronize: false })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  conference: string;
}
