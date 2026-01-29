import { JSX } from 'react'
import { Button } from '@/components/ui/button'
import ZustandCounter from '@/components/app/dev/zustand-counter'
import { ReactQueryExamples } from '@/components/app/dev/query-examples'

export default function DevPage(): JSX.Element {
  return (
    <div>
      <Button>Click me</Button>
      <ZustandCounter />
      <ReactQueryExamples />
    </div>
  )
}
