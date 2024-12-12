import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from '../domain/schemas';
import { Book } from 'src/books/domain/schemas';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async createAuthor(@Body() data: Author): Promise<string> {
    return this.authorService.createAuthor(data);
  }

  @Get(':id')
  async getBooksByAuthor(@Param('id') id: string): Promise<Book[]> {
    return this.authorService.findBooksByAuthor(id);
  }
}
