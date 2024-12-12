import { z } from 'zod';
import { BookAuthor } from 'src/shared/domain/schemas/book-author';
import { BookCategory } from 'src/shared/domain/schemas/book-category';
import { SaleBook } from 'src/shared/domain/schemas/sale-book';

export const Book = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  basePrice: z.number().positive(),
  stock: z.number().positive().int(),
  authors: z.array(BookAuthor),
  categories: z.array(BookCategory),
  sales: z.array(SaleBook),
});
