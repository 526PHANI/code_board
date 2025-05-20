import { createFileRoute } from '@tanstack/react-router'
import AddCommits from '~/components/commits/AddCommits'

export const Route = createFileRoute('/commit/add-commits')({
  component: ()=>{return  <AddCommits/>}
})

