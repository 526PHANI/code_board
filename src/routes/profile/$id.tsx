import { createFileRoute } from '@tanstack/react-router'
import { SingleProfile } from '~/components/profile/SingleProfile'

export const Route = createFileRoute('/profile/$id')({
      component:  SingleProfile,
})