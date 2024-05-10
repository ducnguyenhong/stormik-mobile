import { useNavigation } from '@react-navigation/native';
import LogoIncognito from '@src/assets/images/incognito.png';
import Logo from '@src/assets/images/logo.png';
import { Image, Text, TouchableOpacity, View } from '@src/controls';
import { darkModeAtom } from '@src/states/common';
import { memo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRecoilValue } from 'recoil';
import HomeHistory from './home-history';

const HomeDefault: React.FC = () => {
  const navigation = useNavigation<any>();
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

  return (
    <View bgColor={isDarkMode ? '#1a1a1a' : '#FFF'} flex={1}>
      <View
        justify="center"
        align="center"
        gap={5}
        my={60}
        // direction="row"
      >
        {isDarkMode ? (
          <View
            bgColor="#ccc"
            borderRadius={100}
            w={100}
            h={100}
            justify="center"
            align="center">
            <Image source={LogoIncognito} style={{ width: 60, height: 60 }} />
          </View>
        ) : (
          <View direction="row" align="center" gap={8}>
            <Image source={Logo} w={55} h={55} />
            <Text fontFamily="SemiBold" color="#666666" fontSize={35} mt={-2}>
              Stormik
            </Text>
          </View>
        )}
        {isDarkMode && (
          <Text fontSize={15} color="#ccc" mt={10}>
            Bạn đang trong chế độ ẩn danh
          </Text>
        )}
      </View>

      <View px={25}>
        <TouchableOpacity
          direction="row"
          align="center"
          justify="space-between"
          activeOpacity={0.5}
          bgColor={isDarkMode ? '#828282' : '#f7f7f8'}
          borderRadius={13}
          borderColor={isDarkMode ? '#828282' : '#f2f2f2'}
          px={16}
          borderWidth={0.5}
          py={15}
          onPress={() => navigation.navigate('Search')}>
          <View direction="row" align="center" gap={12}>
            <FeatherIcon
              name="search"
              color={isDarkMode ? '#b9b9b9' : '#828282'}
              size={21}
            />
            <Text
              color={isDarkMode ? '#CCC' : '#828282'}
              fontSize={15}
              fontFamily="Regular">
              Tìm kiếm hoặc nhập URL
            </Text>
          </View>
          {/* <TouchableOpacity>
            <FaIcon
              name="microphone"
              size={18}
              color={isDarkMode ? '#b9b9b9' : '#a6a6a6'}
            />
          </TouchableOpacity> */}
        </TouchableOpacity>
      </View>

      <HomeHistory />
    </View>
  );
};

export default memo(HomeDefault);
