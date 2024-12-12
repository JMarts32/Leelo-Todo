import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/prisma.service';
import { Category, CategoryComplete } from '../domain/schemas';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(input: Category): Promise<void> {
    await this.prisma.category.create({
      data: { name: input.name },
    });
  }

  async getCategoryById(categoryId: string): Promise<Category> {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }
    return category;
  }

  async findCategories(categoryName: string): Promise<CategoryComplete[]> {
    return this.prisma.category.findMany({
      where: { name: categoryName },
    });
  }

  async findBooksByCategory(categoryName: string): Promise<Category[]> {
    const books = await this.prisma.book.findMany({
      where: {
        categories: {
          some: {
            category: { name: { contains: categoryName.toLowerCase() } },
          },
        },
      },
    });
    return books;
  }

  async updateCategory(input: CategoryComplete): Promise<void> {
    await this.prisma.category.update({
      where: { id: input.id },
      data: { name: input.name },
    });
  }

  async delteCategory(categoryId: string): Promise<void> {
    await this.prisma.category.delete({
      where: { id: categoryId },
    });
  }
}
