import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import uuid from 'react-native-uuid';
import { useRecoilState } from 'recoil';
import { tabsAtom } from '../../states/common';
import HomeBody from './body/home-body';
import HomeFooter from './footer';
import HomeHeader from './header/home-header';

const Home = () => {
  const [tabs, setTabs] = useRecoilState(tabsAtom);

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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <HomeHeader />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <HomeBody />
      </ScrollView>
      <HomeFooter />
    </SafeAreaView>
  );
};

export default Home;
