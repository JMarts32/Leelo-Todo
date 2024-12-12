import { Body, Controller, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from '../domain/schemas';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async createAuthor(@Body() data: Author): Promise<void> {
    await this.authorService.createAuthor(data);
  }
}
