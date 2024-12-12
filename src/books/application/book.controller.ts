import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { RegisterBook, BookFilters, Book } from '../domain/schemas';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async postBook(@Body() data: RegisterBook): Promise<void> {
    await this.bookService.registerBook(data);
  }

  @Get()
  async getBooks(@Body() data: BookFilters): Promise<Book[]> {
    return this.bookService.getBooksByFilter(data);
  }
}
