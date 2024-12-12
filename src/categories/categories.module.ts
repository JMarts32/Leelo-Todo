import { Module } from '@nestjs/common';
import { CategoryService } from './application/category.service';

@Module({
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoriesModule {}
