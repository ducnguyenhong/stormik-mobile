import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Text, TouchableOpacity, View } from '../../../controls';
import { keywordAtom, tabsAtom } from '../../../states/common';

const HomeHeader = () => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);
  const navigation = useNavigation<any>();
  const tabs = useRecoilValue(tabsAtom);

  const onPressHome = useCallback(() => {
    setKeyword('');
    navigation.navigate('Home');
  }, [navigation, setKeyword]);

  return (
    <View
      direction="row"
      align="center"
      py={6}
      h={50}
      borderBottomWidth={0.3}
      borderColor="#ccc"
      bgColor="#FFF"
      justify={keyword ? 'flex-start' : 'space-between'}>
      <TouchableOpacity px={20} onPress={onPressHome}>
        <Ionicon name="home" size={18} color="#828282" />
      </TouchableOpacity>
      {!!keyword && (
        <TouchableOpacity
          bgColor="#f5f5f5"
          borderRadius={30}
          borderColor="#e6e6e6"
          flex={1}
          px={15}
          borderWidth={0.5}
          py={9}
          onPress={() => navigation.navigate('Search')}>
          <Text>{keyword}</Text>
        </TouchableOpacity>
      )}
      <View direction="row" align="center" px={20}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          borderWidth={1.5}
          w={20}
          h={20}
          borderColor="#828282"
          borderRadius={3}
          justify="center"
          align="center">
          <Text fontSize={12} color="#828282">
            {tabs.length}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(HomeHeader);
