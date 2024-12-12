import { z } from 'zod';

// Entity Schemas
export const AuthorComplete = z.object({
  id: z.string(),
  name: z.string().nonempty(),
});
export type AuthorComplete = z.infer<typeof AuthorComplete>;
