import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from './member/member.module';
import { InstrumentModule } from './instrument/instrument.module';
import {Instrument} from "./instrument/instrument.entity";
import { Member } from './member/member.entity';
import { MemberInstrument } from './member/member_instrument.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '2203',
      database: 'polytech_orchestra',
      entities: [Instrument, Member, MemberInstrument],
    }),
    InstrumentModule,
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
