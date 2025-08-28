import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MemberInstrument } from '../member/member_instrument.entity';

@Entity('instrument')
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  name: string;

  @Column({name: 'name_plural', nullable: true})
  namePlural: string;

  @OneToMany(() => MemberInstrument, mi => mi.instrument)
  members: MemberInstrument[];

  /**
   * Порядок при отображении в разделе "О нас"
   */
  @Column({nullable: true})
  order: number;
}
