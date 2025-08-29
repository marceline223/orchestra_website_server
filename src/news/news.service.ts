import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {News} from "./news.entity";
import {Repository} from "typeorm";

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {
  }

  findAll(): Promise<News[]> {
    return this.newsRepository.createQueryBuilder('news')
      .orderBy('news.date', 'DESC').getMany()
  }

  findOne(id: number): Promise<News | null> {
    return this.newsRepository.findOneBy({
      id: id,
    });
  }

  remove(id: number): void {
    this.findOne(id).then((news) => {
      if (news) {
        this.newsRepository
          .remove(news)
          .catch((err) => {
            throw new InternalServerErrorException(err.message);
          });
      }
    });
  }
}
