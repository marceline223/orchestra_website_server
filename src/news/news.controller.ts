import {Controller, Delete, Get, Param} from '@nestjs/common';
import { NewsService } from './news.service';
import {News} from "./news.entity";

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<News | null> {
    return this.newsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.newsService.remove(id);
  }
}
