import { Controller, Get, Param, Delete } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne(+id);
  }

  @Get('by-instrument/:idInstrument')
  findByInstrument(@Param('idInstrument') idInstrument: string) {
    return this.memberService.findMemberByInstrument(+idInstrument);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberService.remove(+id);
  }
}
