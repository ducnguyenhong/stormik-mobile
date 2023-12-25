import { StatusBar } from 'react-native';
import { View } from '../../controls';
import SearchHeader from './header';

const Search: React.FC = () => {
  return (
    <View bgColor="#f2f2f2" pt={3}>
      <StatusBar backgroundColor="#F2F2F2" />
      <SearchHeader />
    </View>
  );
};

export default Search;
