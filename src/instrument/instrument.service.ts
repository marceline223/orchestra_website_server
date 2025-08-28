import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Instrument} from "./instrument.entity";
import {Repository} from "typeorm";

@Injectable()
export class InstrumentService {
  constructor(
    @InjectRepository(Instrument)
    private instrumentRepository: Repository<Instrument>,
  ) {}

  findAll() {
    return this.instrumentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} instrument`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrument`;
  }
}
