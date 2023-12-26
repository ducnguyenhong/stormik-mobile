import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import HomeBody from './body/home-body';
import HomeFooter from './footer';
import HomeHeader from './header/home-header';

const Home = () => {
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
