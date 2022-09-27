import { atom } from 'recoil'
import Admin from '@/types/Admin'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const adminState = atom<Admin>({
  key: 'adminState',
  default: null,
  effects_UNSTABLE: [persistAtom],
})
