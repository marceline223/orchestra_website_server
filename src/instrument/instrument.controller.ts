import { Controller, Get, Param, Delete } from '@nestjs/common';
import { InstrumentService } from './instrument.service';

@Controller('instrument')
export class InstrumentController {
  constructor(private readonly instrumentService: InstrumentService) {}

  @Get()
  findAll() {
    return this.instrumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.instrumentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.instrumentService.remove(id);
  }
}
