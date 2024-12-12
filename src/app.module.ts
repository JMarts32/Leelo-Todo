import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { BooksModule } from './books/books.module';
import { SalesModule } from './sales/sales.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthorsModule,
    CategoriesModule,
    BooksModule,
    SalesModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
