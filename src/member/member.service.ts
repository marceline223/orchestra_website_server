import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  findAll() {
    return this.memberRepository.find();
  }

  async findMemberByInstrument(instrumentId: number): Promise<Member[]> {
    return this.memberRepository
      .createQueryBuilder('member')
      .leftJoinAndSelect('member.instruments', 'mi')
      .leftJoinAndSelect('mi.instrument', 'instrument')
      .where('instrument.id = :instrumentId', { instrumentId })
      .orderBy('mi.order', 'ASC')
      .addOrderBy('member.lastName', 'ASC')
      .addOrderBy('member.firstName', 'ASC')
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
