import { useNavigation } from '@react-navigation/native';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Logo from '../../../assets/images/logo.png';
import { Image, TextInput, TouchableOpacity, View } from '../../../controls';
import { darkModeAtom, keywordAtom, urlAtom } from '../../../states/common';
import { checkIsUrl } from '../../../utils/helper';

const SearchHeader: React.FC = () => {
  const setKeyword = useSetRecoilState(keywordAtom);
  const [url, setUrl] = useRecoilState(urlAtom);
  const [currentUrl, setCurrentUrl] = useState(url);
  const navigation = useNavigation<any>();
  const searchRef = useRef<any>(null);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

  const onSearch = useCallback(() => {
    if (!currentUrl) {
      navigation.navigate('Home');
      return;
    }
    const isUrl = checkIsUrl(currentUrl);
    setUrl(
      isUrl ? currentUrl : `https://www.google.com/search?q=${currentUrl}`,
    );
    setKeyword(currentUrl);
    navigation.navigate('Home');
  }, [currentUrl, navigation, setKeyword, setUrl]);

  useEffect(() => {
    searchRef?.current?.focus();
  }, []);

  return (
    <View
      direction="row"
      bgColor={isDarkMode ? '#1a1a1a' : '#FFF'}
      align="center"
      borderBottomWidth={0.5}
      borderColor={isDarkMode ? '#828282' : '#e6e6e6'}>
      <View pl={10} pr={5}>
        <Image source={Logo} w={30} h={30} />
      </View>

      <TextInput
        ref={searchRef}
        flex={1}
        bgColor={isDarkMode ? '#1a1a1a' : '#FFF'}
        placeholder="Tìm kiếm hoặc nhập URL"
        borderWidth={0}
        onChangeText={data => setCurrentUrl(data)}
        onEndEditing={onSearch}
        value={currentUrl}
      />

      <View px={15}>
        <TouchableOpacity>
          <FaIcon
            name="microphone"
            size={18}
            color={isDarkMode ? '#ccc' : '#4f4f4f'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SearchHeader);
