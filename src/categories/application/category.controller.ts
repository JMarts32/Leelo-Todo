import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../domain/schemas';
import { Book } from 'src/books/domain/schemas';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() data: Category): Promise<string> {
    return this.categoryService.createCategory(data);
  }

  @Get(':id')
  async getBooksByAuthor(@Param('id') id: string): Promise<Book[]> {
    return this.categoryService.findBooksByCategory(id);
  }
}
