import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/prisma.service';
import { Sale } from '../domain/schemas';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  async registerSale(input: Sale): Promise<void> {
    const saleBooks = await Promise.all(
      input.books.map(async (saleBook) => {
        // Verify that the book exists
        const book = await this.prisma.book.findUnique({
          where: { id: saleBook.bookId },
        });
        if (!book || book.stock < saleBook.quantity) {
          throw new Error(`Insufficient stock for book ID ${saleBook.bookId}`);
        }

        // Update the stock amount
        await this.prisma.book.update({
          where: { id: saleBook.bookId },
          data: { stock: book.stock - saleBook.quantity },
        });

        return {
          bookId: saleBook.bookId,
          quantity: saleBook.quantity,
          totalBookPrice: book.basePrice * saleBook.quantity,
        };
      }),
    );

    const totalPrice = saleBooks.reduce(
      (sum, item) => sum + item.totalBookPrice,
      0,
    );

    await this.prisma.sale.create({
      data: {
        dateOfSale: input.dateOfSale,
        totalPrice,
        books: { create: saleBooks },
      },
    });
  }

  async totalMonthSales(month: number): Promise<number> {
    const year = new Date().getFullYear();
    const salesOfMonth = await this.prisma.sale.groupBy({
      by: ['dateOfSale'],
      where: {
        dateOfSale: {
          gte: new Date(year, month - 1, 1),
          lt: new Date(year, month, 1),
        },
      },
      _sum: {
        totalPrice: true,
      },
    });

    return salesOfMonth.reduce(
      (total, sale) => total + (sale._sum.totalPrice ?? 0),
      0,
    );
  }
}
