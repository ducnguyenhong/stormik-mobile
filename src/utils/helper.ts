import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import uuid from 'react-native-uuid';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  darkModeAtom,
  historyAtom,
  keywordAtom,
  loadingAtom,
  tabsAtom,
  urlAtom,
} from '../states/common';
import { TabType } from '../types/tab.type';

export const setAsyncStorage = async (key: string, value: any) => {
  try {
    if (!value) {
      await AsyncStorage.removeItem(key);
    } else {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    }
  } catch (e) {
    console.error('setAsyncStorage error:', e);
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const value: any = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.error('getAsyncStorage error:', e);
  }
};

export const getDomainWebsite = (url: string) => {
  if (url.startsWith('http')) {
    return url.split('/')[2];
  }
  return url.split('/')[0];
};

interface EffectAtom {
  setSelf: any;
  onSet: any;
  trigger: any;
}

export const asyncStorageEffect = (key: string) => {
  return ({ setSelf, onSet, trigger }: EffectAtom) => {
    const loadPersisted = async () => {
      const savedValue = await getAsyncStorage(key);
      if (savedValue) {
        setSelf(savedValue);
      }
    };
    if (trigger === 'get') {
      loadPersisted();
    }
    onSet((newValue: any, _: any, isReset?: boolean) =>
      setAsyncStorage(key, isReset ? null : newValue),
    );
  };
};

interface History {
  url: string;
  title: string;
  type?: 'URL' | 'SEARCH';
}

export const useSetHistory = () => {
  const setHistoryList = useSetRecoilState(historyAtom);

  return (data: History) =>
    setHistoryList(prev => {
      const { url, title, type = 'URL' } = data;

      const lastHistory = prev[0];
      const prevList = prev.slice(0);
      const id = uuid.v4() as string;
      if (lastHistory?.url === url) {
        prevList.shift();
        return [
          {
            title,
            type,
            url,
            domain: getDomainWebsite(url),
            accessedAt: dayjs().valueOf(),
            favicon: '',
            id,
          },
          ...prevList,
        ];
      }
      return [
        {
          title,
          type,
          url,
          domain: getDomainWebsite(url),
          accessedAt: dayjs().valueOf(),
          favicon: '',
          id,
        },
        ...prev,
      ];
    });
};

export const useAddTab = () => {
  const setTabs = useSetRecoilState(tabsAtom);
  const setKeyword = useSetRecoilState(keywordAtom);
  const setUrl = useSetRecoilState(urlAtom);
  const setHistory = useSetHistory();
  const setLoading = useSetRecoilState(loadingAtom);
  const setDarkMode = useSetRecoilState(darkModeAtom);

  return (data?: { incognito?: boolean }) => {
    const { incognito } = data || {};

    const newTab: TabType = {
      id: uuid.v4() as string,
      url: '',
      title: 'Trang chủ',
      isActive: true,
      type: incognito ? 'INCOGNITO' : 'NORMAL',
    };

    if (incognito) {
      setDarkMode('dark');
    }
    setTabs(prev => [newTab, ...prev.map(i => ({ ...i, isActive: false }))]);
    setKeyword('');
    setUrl('');
    setHistory({ title: 'Trang chủ', url: '' });
    setLoading(undefined);
  };
};

export const checkIsUrl = (text: string) =>
  !!text.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  );

export const useGoHome = () => {
  const setKeyword = useSetRecoilState(keywordAtom);
  const setUrl = useSetRecoilState(urlAtom);
  const navigation = useNavigation<any>();
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const setHistory = useSetHistory();

  return () => {
    setKeyword('');
    setUrl('');
    const newsTabs = tabs.map(i => {
      if (i.isActive) {
        return { ...i, url: '', title: 'Trang chủ' };
      }
      return i;
    });
    setTabs(newsTabs);
    setHistory({ title: 'Trang chủ', url: '' });
    navigation.navigate('Home');
  };
};
