import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Member } from './member.entity';
import { Instrument } from '../instrument/instrument.entity';

@Entity('member_instrument')
export class MemberInstrument {
  @PrimaryColumn({ name: 'member_id' })
  memberId: number;

  @PrimaryColumn({ name: 'instrument_id' })
  instrumentId: number;

  @ManyToOne(() => Member, member => member.instruments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'member_id' })
  member: Member;

  @ManyToOne(() => Instrument, instrument => instrument.members, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'instrument_id' })
  instrument: Instrument;

  /**
   * "Должность" внутри группы инструментов - Концертмейстер, Первая скрипка и т.д.
   */
  @Column({ nullable: true })
  position: string;

  /**
   * Порядок при отображении в разделе "О нас"
   */
  @Column({ nullable: true })
  order: number;
}
