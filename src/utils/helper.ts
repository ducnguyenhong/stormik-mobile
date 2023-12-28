import AsyncStorage from '@react-native-async-storage/async-storage';

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
