import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from '@src/controls';
import {
  darkModeAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '@src/states/common';
import { useGoHome } from '@src/utils/helper';
import { memo, useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilValue } from 'recoil';
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
        h={55}
        borderBottomWidth={0.3}
        borderColor="#ccc"
        bgColor={isDarkMode ? '#1a1a1a' : '#FFF'}
        justify={keyword ? 'flex-start' : 'space-between'}>
        <TouchableOpacity pl={15} pr={15} onPress={onPressHome}>
          <Ionicon
            name="chevron-back"
            size={24}
            color={isDarkMode ? '#e6e6e6' : '#000'}
          />
        </TouchableOpacity>
        {!!keyword && (
          <TouchableOpacity
            bgColor={isDarkMode ? '#404040' : '#f5f5f5'}
            borderRadius={10}
            borderColor={isDarkMode ? '#828282' : '#f2f2f2'}
            flex={1}
            pl={15}
            pr={15}
            borderWidth={0.5}
            py={5}
            direction="row"
            align="center"
            gap={8}
            onPress={() => navigation.navigate('Search')}>
            <FaIcon name="lock" size={17} color="#828282" />
            <Text
              mt={3}
              flex={1}
              numberOfLines={1}
              // fontFamily="SemiBold"
              color="#4d4d4d">
              {url}
            </Text>
          </TouchableOpacity>
        )}
        <View direction="row" align="center">
          <TouchableOpacity
            onPress={() => navigation.navigate('Tabs')}
            pl={15}
            pr={15}
            py={5}>
            <FeatherIcon name="more-horizontal" color="#000" size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <Loading />
    </View>
  );
};

export default memo(HomeHeader);
