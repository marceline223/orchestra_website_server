import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MemberInstrument } from './member_instrument.entity';

@Entity('member')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ nullable: true })
  surname: string;

  @Column()
  birthday: Date;

  @OneToMany(() => MemberInstrument, mi => mi.member, { cascade: true, eager: true })
  instruments: MemberInstrument[];

  @Column({ name: 'university_id', nullable: true })
  university: number;

  @Column({ nullable: true })
  department: string;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  year: number;

  @Column({ name: 'degree_id', nullable: true })
  degree: number;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ name: 'link_vk', nullable: true })
  linkVK: string;

  @Column({ name: 'link_tg', nullable: true })
  linkTG: string;

  @Column({ name: 'photo_src', nullable: true })
  photoSrc: string;

  @Column({ name: 'new' })
  isNew: boolean;

  @Column({ name: 'active' })
  isActive: boolean;

  @Column({ name: 'graduated' })
  isGraduated: boolean;
}
