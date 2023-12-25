import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import HomeBody from './body/home-body';
import HomeHeader from './header/home-header';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <HomeHeader />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <HomeBody />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
