import { atom } from 'recoil';

export const keywordAtom = atom<string>({
  key: 'KEYWORD_ATOM',
  default: '',
});
