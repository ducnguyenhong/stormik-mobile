import { useNavigation } from '@react-navigation/native';
import { memo, useCallback, useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSetRecoilState } from 'recoil';
import { Text, TextInput, TouchableOpacity, View } from '../../../controls';
import { keywordAtom } from '../../../states/common';

const HomeHeader = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const setKeyword = useSetRecoilState(keywordAtom);
  const navigation = useNavigation<any>();

  const onPressHome = useCallback(() => {
    setKeyword('');
    setCurrentUrl('');
    navigation.navigate('Home');
  }, [navigation, setKeyword]);

  return (
    <View direction="row" align="center" py={4} bgColor="#FFF">
      <TouchableOpacity px={15} onPress={onPressHome}>
        <Ionicon name="home" size={18} color="#000" />
      </TouchableOpacity>
      <TextInput
        bgColor="#f5f5f5"
        borderRadius={30}
        flex={1}
        px={15}
        borderWidth={0.3}
        py={5}
        placeholder="URL"
        onChangeText={data => setCurrentUrl(data)}
        onEndEditing={() => {
          setKeyword(currentUrl);
        }}
      />
      <View direction="row" align="center" gap={8}>
        <TouchableOpacity px={15}>
          <Ionicon name="add" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          borderWidth={1}
          w={22}
          h={22}
          borderRadius={3}
          justify="center"
          align="center">
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity px={15}>
          <Ionicon name="ellipsis-vertical" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(HomeHeader);
