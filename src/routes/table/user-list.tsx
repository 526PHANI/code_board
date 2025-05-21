import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { UserList } from '~/components/Table/UserList';

const userListSearchSchema = z.object({
  page_no: z.number().int().min(1).default(1),
  page_size: z.number().int().min(1).default(10),
});

export const Route = createFileRoute('/table/user-list')({
  validateSearch: userListSearchSchema,
  component: UserList,
});
import { Route as RootRoute } from '../__root';
Route.parentRoute = RootRoute;