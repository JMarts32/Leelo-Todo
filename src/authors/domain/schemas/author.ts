import { z } from 'zod';
import { BookAuthor } from 'src/shared/domain/schemas/book-author';

// Entity Schemas
export const Author = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  books: z.array(BookAuthor),
});
export type Author = z.infer<typeof Author>;
