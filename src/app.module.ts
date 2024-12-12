import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { BooksModule } from './books/books.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [AuthorsModule, CategoriesModule, BooksModule, SalesModule],
  controllers: [],
  providers: [],
  exports: [AuthorsModule, CategoriesModule, BooksModule, SalesModule],
})
export class AppModule {}
