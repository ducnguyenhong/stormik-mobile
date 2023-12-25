import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import { Text, TouchableOpacity, View } from '../../../controls';
import { keywordAtom } from '../../../states/common';
import MoreAction from './components/more-action';

const HomeHeader = () => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);
  const navigation = useNavigation<any>();

  const onPressHome = useCallback(() => {
    setKeyword('');
    navigation.navigate('Home');
  }, [navigation, setKeyword]);

  return (
    <View
      direction="row"
      align="center"
      py={4}
      h={48}
      bgColor="#FFF"
      justify={keyword ? 'flex-start' : 'space-between'}>
      <TouchableOpacity px={15} onPress={onPressHome}>
        <Ionicon name="home" size={18} color="#6b9c27" />
      </TouchableOpacity>
      {!!keyword && (
        <TouchableOpacity
          bgColor="#f5f5f5"
          borderRadius={30}
          borderColor="#e6e6e6"
          flex={1}
          px={15}
          borderWidth={0.5}
          py={10}
          onPress={() => navigation.navigate('Search')}>
          <Text>{keyword}</Text>
        </TouchableOpacity>
      )}
      <View direction="row" align="center" gap={8}>
        <TouchableOpacity px={15}>
          <Ionicon name="add" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          borderWidth={1}
          w={20}
          h={20}
          borderRadius={3}
          justify="center"
          align="center">
          <Text fontSize={12}>1</Text>
        </TouchableOpacity>
        <MoreAction />
      </View>
    </View>
  );
};

export default memo(HomeHeader);
