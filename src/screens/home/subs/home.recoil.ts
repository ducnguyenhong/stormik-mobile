import { atom } from 'recoil';

export const refreshAtom = atom<boolean>({
  key: 'REFRESH_ATOM',
  default: false,
});
