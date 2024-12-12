import { z } from 'zod';

// Entity Schemas
export const Author = z.object({
  name: z.string().nonempty(),
});
export type Author = z.infer<typeof Author>;
