import { Module } from '@nestjs/common';
import { AuthorsModule } from 'src/authors/authors.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { BookService } from './application/book.service';

@Module({
  imports: [AuthorsModule, CategoriesModule],
  providers: [BookService],
  exports: [BookService],
})
export class BooksModule {}
