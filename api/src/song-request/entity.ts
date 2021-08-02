import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['songName', 'songArtist'])
export class SongRequest {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public songName: string;

  @Column()
  public songArtist: string;

  @Column()
  public songId: number;

  @Column()
  public username: string;

  @Column({ nullable: true })
  public originalMessage: string;


  // // lexoRank
  // @Column()
  // public lexoRank: string;
}