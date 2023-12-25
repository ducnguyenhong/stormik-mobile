import { memo, useRef } from 'react';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Ionicon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, View } from '../../../../controls';
import { MORE_ACTION } from './header.data';

const MoreAction: React.FC = () => {
  const moreActionRef = useRef<ActionSheetRef>(null);

  const MORE_TOP_ACTION = [
    {
      icon: <McIcon name="arrow-right" size={25} />,
      name: 'Tiến',
      onPress: () => {},
    },
    {
      icon: <McIcon name="refresh" size={25} />,
      name: 'Tải lại',
      onPress: () => {},
    },
    {
      icon: <McIcon name="star-outline" size={25} />,
      name: 'Đánh dấu',
      onPress: () => {},
    },
    {
      icon: <McIcon name="download" size={25} />,
      name: 'Tải xuống',
      onPress: () => {},
    },

    {
      icon: <McIcon name="cog" size={25} />,
      name: 'Cài đặt',
      onPress: () => {},
    },
  ];

  return (
    <View>
      <TouchableOpacity px={15} onPress={() => moreActionRef.current?.show()}>
        <Ionicon name="ellipsis-vertical" size={18} color="#000" />
      </TouchableOpacity>

      <ActionSheet ref={moreActionRef} useBottomSafeAreaPadding>
        <View direction="row" bgColor="#f2f2f2" justify="space-evenly" py={2}>
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
        <View mt={10}>
          {MORE_ACTION.map(item => {
            const { route, icon, name } = item;
            return (
              <TouchableOpacity
                onPress={() => moreActionRef.current?.hide()}
                py={12}
                px={20}
                key={route}
                direction="row"
                gap={20}
                align="center">
                {icon}
                <Text fontSize={16}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ActionSheet>
    </View>
  );
};

export default memo(MoreAction);
