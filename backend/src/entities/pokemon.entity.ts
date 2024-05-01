import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  attack: number;

  @Column({ nullable: false })
  defense: number;

  @Column({ nullable: false })
  hp: number;

  @Column({ nullable: false })
  speed: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  imageUrl: string;
}
