import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { RegisterBook, BookFilters, Book } from '../domain/schemas';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async postBook(@Body() data: RegisterBook): Promise<Book> {
    if (
      !data.authors ||
      data.authors.length === 0 ||
      !data.categories ||
      data.categories.length === 0
    ) {
      throw new BadRequestException(
        'El libro debe al menos tener un autor y una categoria',
      );
    }
    return this.bookService.registerBook(data);
  }

  @Get()
  async getBooks(@Body() data: BookFilters): Promise<Book[]> {
    return this.bookService.getBooksByFilter(data);
  }
}
