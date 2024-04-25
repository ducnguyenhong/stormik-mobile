import { useIsFocused, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from '@src/controls';
import { useEffect } from 'react';
import { BackHandler, ScrollView, StatusBar } from 'react-native';
import uuid from 'react-native-uuid';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  darkModeAtom,
  historyAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '../../states/common';
import { useSetHistory } from '../../utils/helper';
import HomeBody from './body/home-body';
import HomeFooter from './footer';
import HomeHeader from './header/home-header';

const Home = () => {
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const history = useRecoilValue(historyAtom);
  const lastHistory = history[1];
  const setUrl = useSetRecoilState(urlAtom);
  const setKeyword = useSetRecoilState(keywordAtom);
  const setHistory = useSetHistory();
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (!tabs.length) {
      setTabs([
        {
          id: uuid.v4() as string,
          url: '',
          title: 'Trang chủ',
          isActive: true,
          type: 'NORMAL',
        },
      ]);
    }
  }, [setTabs, tabs.length]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (!isFocused) {
          navigation.goBack();
          return true;
        }
        const { title: lastTitle, url: lastUrl } = lastHistory;
        if (!lastUrl) {
          setUrl('');
          setKeyword('');
          setHistory({ title: 'Trang chủ', url: '' });
          return;
        }
        setHistory({ title: lastTitle, url: lastUrl });
        return true;
      },
    );

    return () => backHandler.remove();
  }, [isFocused, lastHistory, navigation, setHistory, setKeyword, setUrl]);

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={isDarkMode ? '#1a1a1a' : '#FFF'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <HomeHeader />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <HomeBody />
      </ScrollView>
      <HomeFooter />
    </SafeAreaView>
  );
};

export default Home;
