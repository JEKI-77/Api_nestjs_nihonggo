import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kosakata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  kanji: string;

  @Column('text')
  romaji: string;

  @Column('text')
  arti: string;

  @Column('text')
  kategori: string;
}
