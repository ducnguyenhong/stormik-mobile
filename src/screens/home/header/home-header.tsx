import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Text, TouchableOpacity, View } from '../../../controls';
import {
  darkModeAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '../../../states/common';

const HomeHeader = () => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);
  const setUrl = useSetRecoilState(urlAtom);
  const navigation = useNavigation<any>();
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

  const onPressHome = useCallback(() => {
    setKeyword('');
    setUrl('');
    const newsTabs = tabs.map(i => {
      if (i.isActive) {
        return { ...i, url: '', title: 'Trang chủ' };
      }
      return i;
    });
    setTabs(newsTabs);
    navigation.navigate('Home');
  }, [navigation, setKeyword, setTabs, setUrl, tabs]);

  return (
    <View
      direction="row"
      align="center"
      py={6}
      h={50}
      borderBottomWidth={0.3}
      borderColor="#ccc"
      bgColor={isDarkMode ? '#1a1a1a' : '#FFF'}
      justify={keyword ? 'flex-start' : 'space-between'}>
      <TouchableOpacity px={20} onPress={onPressHome}>
        <Ionicon
          name="home"
          size={18}
          color={isDarkMode ? '#e6e6e6' : '#828282'}
        />
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
      <View direction="row" align="center">
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          pl={10}
          pr={25}
          py={5}>
          <View
            borderWidth={1.5}
            w={20}
            h={20}
            borderColor={isDarkMode ? '#e6e6e6' : '#828282'}
            borderRadius={3}
            justify="center"
            align="center">
            <Text fontSize={12} color={isDarkMode ? '#e6e6e6' : '#828282'}>
              {tabs.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(HomeHeader);
