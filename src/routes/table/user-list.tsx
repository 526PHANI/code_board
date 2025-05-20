import { createFileRoute } from '@tanstack/react-router'
import { UserList } from '~/components/Table/UserList'

export const Route = createFileRoute('/table/user-list')({
  
  component: () =>{ return <UserList />}
})
