'use client'

import { useBasicCounter } from '@/stores/useBasicCounter'

export default function ZustandCounter() {
  const { count, inc } = useBasicCounter()
  return (
    <div className="bg-amber-100">
      <span className="text-6xl mr-2">{count}</span>
      <button className="text-4xl" onClick={inc}>
        one up
      </button>
    </div>
  )
}
