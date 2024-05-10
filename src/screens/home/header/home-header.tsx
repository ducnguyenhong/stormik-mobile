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
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Fa6Icon from 'react-native-vector-icons/FontAwesome6';
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
        <TouchableOpacity pl={17} pr={15} onPress={onPressHome}>
          <Ionicon
            name="home"
            size={20}
            color={isDarkMode ? '#e6e6e6' : '#449735'}
          />
        </TouchableOpacity>
        {!!keyword && (
          <TouchableOpacity
            bgColor={isDarkMode ? '#404040' : '#f2f2f2'}
            borderRadius={10}
            borderColor={isDarkMode ? '#828282' : '#e6e6e6'}
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
            pl={20}
            pr={10}
            py={5}>
            <View position="relative">
              <Ionicon name="copy-outline" color="#4d4d4d" size={24} />
              <View position="absolute" top={5} left={10.5}>
                <Text fontSize={12} fontFamily="Medium">
                  {tabs.length}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('User')}
            pl={10}
            pr={15}
            py={5}>
            <Fa6Icon name="circle-user" color="#4d4d4d" solid size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <Loading />
    </View>
  );
};

export default memo(HomeHeader);
