import { memo, useRef } from 'react';
import { FlatList } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Ionicon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, View } from '../../../../controls';
import { MORE_ACTION } from './header.data';

const MoreAction: React.FC = () => {
  const moreActionRef = useRef<ActionSheetRef>(null);

  const MORE_TOP_ACTION = [
    {
      icon: <McIcon name="arrow-left" size={25} color="#4f4f4f" />,
      name: 'Quay lại',
      onPress: () => {},
    },
    {
      icon: <McIcon name="refresh" size={25} color="#4f4f4f" />,
      name: 'Tải lại',
      onPress: () => {},
    },
    {
      icon: <McIcon name="arrow-right" size={25} color="#4f4f4f" />,
      name: 'Tiến',
      onPress: () => {},
    },
    {
      icon: <McIcon name="plus" size={27} color="#4f4f4f" />,
      name: 'Thẻ mới',
      onPress: () => {},
    },
    {
      icon: <McIcon name="star-outline" size={25} color="#4f4f4f" />,
      name: 'Đánh dấu',
      onPress: () => {},
    },
    {
      icon: <McIcon name="information-outline" size={25} color="#4f4f4f" />,
      name: 'Thông tin',
      onPress: () => {},
    },
  ];

  return (
    <View>
      <TouchableOpacity px={15} onPress={() => moreActionRef.current?.show()}>
        <Ionicon name="ellipsis-vertical" size={18} color="#000" />
      </TouchableOpacity>

      <ActionSheet ref={moreActionRef} useBottomSafeAreaPadding>
        <View direction="row" bgColor="#efeff6" justify="space-evenly" py={2}>
          {MORE_TOP_ACTION.map(item => {
            const { icon, name, onPress } = item;
            return (
              <TouchableOpacity
                onPress={() => {
                  onPress();
                  moreActionRef.current?.hide();
                }}
                py={12}
                px={20}
                key={name}
                direction="row"
                gap={20}
                align="center">
                {icon}
              </TouchableOpacity>
            );
          })}
        </View>
        <View direction="row">
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
              const { route, icon, name } = item;
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  w="33.33%"
                  onPress={() => moreActionRef.current?.hide()}
                  py={15}
                  key={route}
                  gap={4}
                  align="center">
                  <View h={28} justify="center">
                    {icon}
                  </View>
                  <Text>{name}</Text>
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
