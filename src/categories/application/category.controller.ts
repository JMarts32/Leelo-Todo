import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../domain/schemas';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() data: Category): Promise<void> {
    await this.categoryService.createCategory(data);
  }
}
