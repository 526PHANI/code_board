import { z } from 'zod';
import { UserList } from '~/components/Table/UserList';

export const userListRoute = route({
  path: '/users',
  component: UserList,
  searchSchema: z.object({
    page_no: z.coerce.number().optional(),
    page_size: z.coerce.number().optional(),
  }),
});
function route(arg0: { path: string; component: any; searchSchema: z.ZodObject<{ page_no: z.ZodOptional<z.ZodNumber>; page_size: z.ZodOptional<z.ZodNumber>; }, "strip", z.ZodTypeAny, { page_no?: number | undefined; page_size?: number | undefined; }, { page_no?: number | undefined; page_size?: number | undefined; }>; }) {
    throw new Error('Function not implemented.');
}

