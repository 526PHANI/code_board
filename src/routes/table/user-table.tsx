import { createFileRoute } from '@tanstack/react-router'
import { UserTable } from '~/components/Table/UserTable'

export const Route = createFileRoute('/table/user-table')({
  component: () => <UserTable />,
})

