import { z } from 'zod';

export const BookCategory = z.object({
  id: z.number().positive().int(),
  bookId: z.string(),
  categoryId: z.string(),
});
export type BookCategory = z.infer<typeof BookCategory>;
