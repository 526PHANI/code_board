import { createFileRoute } from '@tanstack/react-router'
import AddTemp from '~/components/commits/addtemp'

export const Route = createFileRoute('/commit/add-temp')({
  component: AddTemp,
})

