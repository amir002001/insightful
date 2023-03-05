import { Mentor } from '@/pages/api/best'
import { atom } from 'jotai'
export const mentor_atom = atom<Mentor | null>(null)
