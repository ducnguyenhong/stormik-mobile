import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilValue } from 'recoil';
import { Text, TouchableOpacity, View } from '../../../controls';
import {
  darkModeAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '../../../states/common';
import { useGoHome } from '../../../utils/helper';
import Loading from './component/loading';

const HomeHeader = () => {
  const keyword = useRecoilValue(keywordAtom);
  const url = useRecoilValue(urlAtom);
  const navigation = useNavigation<any>();
  const tabs = useRecoilValue(tabsAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const goHome = useGoHome();

  const onPressHome = useCallback(() => {
    goHome();
  }, [goHome]);

  return (
    <View position="relative">
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
            bgColor={isDarkMode ? '#404040' : '#f5f5f5'}
            borderRadius={30}
            borderColor={isDarkMode ? '#828282' : '#e6e6e6'}
            flex={1}
            px={15}
            borderWidth={0.5}
            py={9}
            onPress={() => navigation.navigate('Search')}>
            <Text>{url}</Text>
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
      <Loading />
    </View>
  );
};

export default memo(HomeHeader);
