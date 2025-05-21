import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import CommitsList from '~/components/commits/CommitsList';


const commitListSearchSchema = z.object({
  page_no: z.number().int().min(1).default(1),
  page_size: z.number().int().min(1).default(10),
});

export const Route = createFileRoute('/commit/get-commit')({
  validateSearch: commitListSearchSchema,
  component: CommitsList,
});


import { Route as RootRoute } from '../__root';
Route.parentRoute = RootRoute;
