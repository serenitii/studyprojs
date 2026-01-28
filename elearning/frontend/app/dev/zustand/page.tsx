'use client'

import { useStoreCount } from '@/app/stores/count'

export default function Counter() {
  const { count, inc } = useStoreCount()
  return (
    <div className="bg-amber-100">
      <span className="text-2xl">{count}</span>
      <button className="text-4xl" onClick={inc}>
        one up
      </button>
    </div>
  )
}
