import { atom } from 'recoil';
import { HistoryType } from '../types/history.type';
import { TabType } from '../types/tab.type';
import { asyncStorageEffect } from '../utils/helper';

export const keywordAtom = atom<string>({
  key: 'KEYWORD_ATOM',
  default: '',
  effects: [asyncStorageEffect('current-url')],
});

export const tabsAtom = atom<TabType[]>({
  key: 'TABS_ATOM',
  default: [],
  effects: [asyncStorageEffect('tabs')],
});

export const historyAtom = atom<HistoryType[]>({
  key: 'HISTORY_ATOM',
  default: [],
  effects: [asyncStorageEffect('history')],
});
