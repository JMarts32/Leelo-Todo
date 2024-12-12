import { z } from 'zod';
import { BookCategory } from 'src/shared/domain/schemas/book-category';

export const Category = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  books: z.array(BookCategory),
});
