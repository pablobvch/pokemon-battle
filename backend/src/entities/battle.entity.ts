import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('battles')
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  pokemon1Id: number;

  @Column({ nullable: false })
  pokemon2Id: number;

  @Column({ nullable: false })
  winnerId: number;
}
