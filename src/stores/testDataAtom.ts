import { atom } from 'jotai'

export type TestData = {
  id: string
  created_at: Date
}

export const testDataAtom = atom<TestData[]>([])
