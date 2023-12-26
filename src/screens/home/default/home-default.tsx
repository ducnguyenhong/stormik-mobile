import { useNavigation } from '@react-navigation/native';
import Logo from 'assets/images/logo.png';
import { memo } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Image, Text, TouchableOpacity, View } from '../../../controls';
import HomeHistory from './home-history';

const HomeDefault: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View bgColor="#FFF" flex={1}>
      <View
        justify="center"
        align="center"
        gap={5}
        mt={20}
        mb={50}
        // direction="row"
      >
        <Image source={Logo} style={{ width: 100, height: 100 }} />
        <Text fontSize={18} color="#55bd42">
          Stormik Browser - Trình duyệt siêu tốc
        </Text>
      </View>

      <View px={25}>
        <TouchableOpacity
          direction="row"
          align="center"
          justify="space-between"
          activeOpacity={0.5}
          bgColor="#f0f0f4"
          borderRadius={30}
          borderColor="#e6e6e6"
          px={15}
          borderWidth={0.5}
          py={14}
          onPress={() => navigation.navigate('Search')}>
          <View direction="row" align="center" gap={8}>
            <Ionicon name="search" color="#a6a6a6" size={21} />
            <Text color="#828282" fontSize={15}>
              Tìm kiếm hoặc nhập URL
            </Text>
          </View>
          <TouchableOpacity>
            <FaIcon name="microphone" size={18} color="#a6a6a6" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <HomeHistory />
    </View>
  );
};

export default memo(HomeDefault);
