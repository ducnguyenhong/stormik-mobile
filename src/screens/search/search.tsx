import { StatusBar } from 'react-native';
import { useRecoilValue } from 'recoil';
import { SafeAreaView, View } from '../../controls';
import { darkModeAtom } from '../../states/common';
import SearchHeader from './header';

const Search: React.FC = () => {
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

  return (
    <SafeAreaView>
      <View bgColor={isDarkMode ? '#1a1a1a' : '#FFF'} pt={3}>
        <StatusBar
          backgroundColor={isDarkMode ? '#1a1a1a' : '#FFF'}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <SearchHeader />
      </View>
    </SafeAreaView>
  );
};

export default Search;
