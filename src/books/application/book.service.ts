import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/prisma.service';
import { AuthorService } from 'src/authors/application/author.service';
import { CategoryService } from 'src/categories/application/category.service';
import { RegisterBook, BookFilters, Book } from '../domain/schemas';

@Injectable()
export class BookService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authorService: AuthorService,
    private readonly categoryService: CategoryService,
  ) {}

  async registerBook(input: RegisterBook): Promise<Book> {
    try {
      // Verify that authors exist
      await Promise.all(
        input.authors.map((authorId) =>
          this.authorService.getAuthorById(authorId),
        ),
      );
      // Verify that categories exist
      await Promise.all(
        input.categories.map((categoryId) =>
          this.categoryService.getCategoryById(categoryId),
        ),
      );

      // Create the book and connect authors and categories
      return this.prisma.book.create({
        data: {
          name: input.name,
          basePrice: input.basePrice,
          stock: input.stock,
          authors: {
            create: input.authors.map((authorId) => ({
              author: { connect: { id: authorId } },
            })),
          },
          categories: {
            create: input.categories.map((categoryId) => ({
              category: { connect: { id: categoryId } },
            })),
          },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBooksByFilter(input: BookFilters): Promise<Book[]> {
    return this.prisma.book.findMany({
      where: {
        AND: [
          input.authorId
            ? { authors: { some: { authorId: input.authorId } } }
            : {},
          input.categoryId
            ? { categories: { some: { categoryId: input.categoryId } } }
            : {},
        ],
      },
    });
  }
}
