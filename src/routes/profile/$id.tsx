import { createFileRoute } from '@tanstack/react-router'
import { ViewProfile } from '~/components/Profile/ViewProfile';

export const Route = createFileRoute('/profile/$id')({
      component: ViewProfile,
})
