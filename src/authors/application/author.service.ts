import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/prisma.service';
import { Author, AuthorComplete } from '../domain/schemas';
import { Book } from 'src/books/domain/schemas/book';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async createAuthor(input: Author): Promise<void> {
    await this.prisma.author.create({
      data: { name: input.name },
    });
  }

  async getAuthorById(authorId: string): Promise<Author> {
    const author = await this.prisma.author.findUnique({
      where: { id: authorId },
    });
    if (!author) {
      throw new NotFoundException(`Author with ID ${authorId} not found`);
    }
    return author;
  }

  async findAuthors(authorName: string): Promise<AuthorComplete[]> {
    return this.prisma.author.findMany({
      where: { name: authorName },
    });
  }

  async findBooksByAuthor(authorName: string): Promise<Book[]> {
    const books = await this.prisma.book.findMany({
      where: {
        authors: {
          some: {
            author: { name: { contains: authorName.toLowerCase() } },
          },
        },
      },
    });
    return books;
  }

  async updateAuthor(input: AuthorComplete): Promise<void> {
    await this.prisma.author.update({
      where: { id: input.id },
      data: { name: input.name },
    });
  }

  async delteAuthor(authorId: string): Promise<void> {
    await this.prisma.author.delete({
      where: { id: authorId },
    });
  }
}
