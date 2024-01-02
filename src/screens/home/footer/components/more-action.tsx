import { useNavigation } from '@react-navigation/native';
import { memo, useRef } from 'react';
import { FlatList } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Ionicon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilValue } from 'recoil';
import { Text, TouchableOpacity, View } from '../../../../controls';
import { darkModeAtom } from '../../../../states/common';
import { useAddTab } from '../../../../utils/helper';

const MoreAction: React.FC = () => {
  const navigation = useNavigation<any>();
  const moreActionRef = useRef<ActionSheetRef>(null);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const addTab = useAddTab();

  const MORE_ACTION = [
    {
      icon: (
        <McIcon
          name="plus"
          size={29}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Thẻ mới',
      route: 'Page',
      onPress: () => addTab(),
    },
    {
      icon: (
        <McIcon
          name="incognito"
          size={25}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Ẩn danh',
      route: 'IncognitoPage',
      onPress: () => addTab({ incognito: true }),
    },
    {
      icon: (
        <McIcon
          name="history"
          size={25}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Lịch sử',
      route: 'History',
      onPress: () => navigation.navigate('History'),
    },
    {
      icon: (
        <McIcon
          name="star"
          size={25}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Dấu trang',
      route: 'Bookmark',
      onPress: () => navigation.navigate('Bookmark'),
    },
    {
      icon: (
        <Ionicon
          name="moon"
          size={21}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Chủ đề',
      route: 'Theme',
      onPress: () => navigation.navigate('Theme'),
    },
    {
      icon: (
        <McIcon
          name="download"
          size={25}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Tải xuống',
      route: 'Download',
      onPress: () => navigation.navigate('Download'),
    },
    {
      icon: (
        <McIcon
          name="cog"
          size={24}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Cài đặt',
      route: 'Setting',
      onPress: () => navigation.navigate('Setting'),
    },
    {
      icon: (
        <McIcon
          name="alert-circle-outline"
          size={25}
          color={isDarkMode ? '#f2f2f2' : '#55bd42'}
        />
      ),
      name: 'Trợ giúp',
      route: 'Support',
      onPress: () => navigation.navigate('Support'),
    },
  ];

  return (
    <View>
      <TouchableOpacity
        py={10}
        px={20}
        activeOpacity={0.3}
        direction="row"
        gap={20}
        align="center"
        onPress={() => moreActionRef.current?.show()}>
        <McIcon
          name="dots-horizontal"
          size={27}
          color={isDarkMode ? '#f2f2f2' : '#828282'}
        />
      </TouchableOpacity>

      <ActionSheet ref={moreActionRef} useBottomSafeAreaPadding>
        <View direction="row" bgColor={isDarkMode ? '#333333' : '#FFF'}>
          <FlatList
            data={MORE_ACTION}
            keyExtractor={item => item.route}
            numColumns={3}
            contentContainerStyle={{
              borderBottomWidth: 0.5,
              borderColor: '#e6e6e6',
              paddingBottom: 15,
              paddingTop: 12,
            }}
            renderItem={({ item }) => {
              const { route, icon, name, onPress } = item;
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  w="33.33%"
                  onPress={() => {
                    onPress();
                    moreActionRef.current?.hide();
                  }}
                  py={15}
                  key={route}
                  gap={4}
                  align="center">
                  <View h={28} justify="center">
                    {icon}
                  </View>
                  <Text fontFamily="Inter-Medium">{name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ActionSheet>
    </View>
  );
};

export default memo(MoreAction);
