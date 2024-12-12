import { Module } from '@nestjs/common';
import { AuthorsModule } from 'src/authors/authors.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { BookService } from './application/book.service';
import { BookController } from './application/book.controller';

@Module({
  imports: [AuthorsModule, CategoriesModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BooksModule {}
