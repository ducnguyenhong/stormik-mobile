import { atom } from 'recoil';
import { asyncStorageEffect } from '../../../utils/helper';

export const historyAtom = atom({
  key: 'HISTORY_ATOM',
  default: [],
  effects: [asyncStorageEffect('history')],
});
