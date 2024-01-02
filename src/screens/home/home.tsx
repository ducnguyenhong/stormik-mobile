import { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import uuid from 'react-native-uuid';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SafeAreaView } from '../../controls';
import { darkModeAtom, tabsAtom } from '../../states/common';
import HomeBody from './body/home-body';
import HomeFooter from './footer';
import HomeHeader from './header/home-header';

const Home = () => {
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

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
