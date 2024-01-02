import { atom } from 'recoil';
import { HistoryType } from '../types/history.type';
import { TabType } from '../types/tab.type';
import { asyncStorageEffect } from '../utils/helper';

export const darkModeAtom = atom<'light' | 'dark'>({
  key: 'DARK_MODE_ATOM',
  default: 'light',
  effects: [asyncStorageEffect('dark-mode')],
});

export const keywordAtom = atom<string>({
  key: 'KEYWORD_ATOM',
  default: '',
  effects: [asyncStorageEffect('current-keyword')],
});

export const urlAtom = atom<string>({
  key: 'URL_ATOM',
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
