import { create } from 'zustand'

export type Store = {
  count: number
  inc: () => void
}

const useBasicCounter = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export { useBasicCounter }
