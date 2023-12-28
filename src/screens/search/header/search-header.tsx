import { useNavigation } from '@react-navigation/native';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useRecoilState } from 'recoil';
import { Text, TextInput, TouchableOpacity, View } from '../../../controls';
import { keywordAtom } from '../../../states/common';

const SearchHeader: React.FC = () => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);
  const [currentUrl, setCurrentUrl] = useState(keyword);
  const navigation = useNavigation<any>();
  const searchRef = useRef<any>(null);

  const onSearch = useCallback(() => {
    setKeyword(currentUrl);
    navigation.navigate('Home');
  }, [currentUrl, navigation, setKeyword]);

  useEffect(() => {
    searchRef?.current?.focus();
  }, []);

  return (
    <View
      direction="row"
      bgColor="#FFF"
      align="center"
      mx={5}
      borderRadius={15}>
      <View px={15}>
        <Text>log</Text>
      </View>

      <TextInput
        ref={searchRef}
        flex={1}
        placeholder="Tìm kiếm hoặc nhập URL"
        borderWidth={0}
        onChangeText={data => setCurrentUrl(data)}
        onEndEditing={onSearch}
        value={currentUrl}
      />

      <View px={15}>
        <TouchableOpacity>
          <FaIcon name="microphone" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SearchHeader);
