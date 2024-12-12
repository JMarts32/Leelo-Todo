import { z } from 'zod';

export const BookAuthor = z.object({
  id: z.number().positive().int(),
  bookId: z.string(),
  authorId: z.string(),
});
export type BookAuthor = z.infer<typeof BookAuthor>;
