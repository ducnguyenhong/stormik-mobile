import { useNavigation } from '@react-navigation/native';
import Logo from 'assets/images/logo.png';
import { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from '../../../controls';

const HomeDefault: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View bgColor="#FFF" flex={1}>
      <View justify="center" align="center" gap={15} my={40} direction="row">
        <Image source={Logo} style={{ width: 45, height: 45 }} />
        <Text fontSize={45} color="#6b9c27">
          Stormik
        </Text>
      </View>

      <View px={25}>
        <TouchableOpacity
          bgColor="#e4e4ec"
          borderRadius={30}
          borderColor="#e6e6e6"
          px={15}
          borderWidth={0.5}
          py={14}
          onPress={() => navigation.navigate('Search')}>
          <Text color="#828282">Tìm kiếm hoặc nhập URL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(HomeDefault);
