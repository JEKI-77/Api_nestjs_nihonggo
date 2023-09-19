import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class kanji {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  kanji: string;

  @Column('text')
  onyomi: string;

  @Column('text')
  kunyomi: string;

  @Column('text')
  arti: string;

  @Column('text')
  level: string;
}
