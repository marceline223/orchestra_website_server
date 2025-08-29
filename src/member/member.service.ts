import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Member} from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  async findMemberByInstrument(instrumentId: number): Promise<Member[]> {
    return this.memberRepository
      .createQueryBuilder('member')
      .leftJoinAndSelect('member.instruments', 'mi')
      .leftJoinAndSelect('mi.instrument', 'instrument')
      .where('instrument.id = :instrumentId', {instrumentId})
      .orderBy('mi.order', 'ASC')
      .addOrderBy('member.lastName', 'ASC')
      .addOrderBy('member.firstName', 'ASC')
      .getMany();
  }

  findOne(id: number): Promise<Member | null> {
    return this.memberRepository.findOneBy({id});
  }

  remove(id: number): void {
    this.findOne(id).then((member) => {
      if (member) {
        return this.memberRepository
          .remove(member)
          .catch((err) => {
            throw new InternalServerErrorException(err.message);
          });
      }
      return null;
    });
  }
}
