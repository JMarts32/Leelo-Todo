import { Module } from '@nestjs/common';
import { CategoryService } from './application/category.service';
import { CategoryController } from './application/category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoriesModule {}
