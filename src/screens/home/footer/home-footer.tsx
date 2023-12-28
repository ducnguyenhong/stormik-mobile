import { Fragment, memo } from 'react';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, View } from '../../../controls';
import MoreAction from './components/more-action';

const HomeFooter: React.FC = () => {
  const ACTIONS = [
    {
      icon: <McIcon name="arrow-left" size={25} color="#828282" />,
      name: 'Quay lại',
      onPress: () => {},
    },
    {
      icon: <McIcon name="refresh" size={25} color="#828282" />,
      name: 'Tải lại',
      onPress: () => {},
    },
    {
      icon: <McIcon name="arrow-right" size={25} color="#828282" />,
      name: 'Tiến',
      onPress: () => {},
    },
    {
      icon: <McIcon name="plus" size={27} color="#828282" />,
      name: 'Thẻ mới',
      onPress: () => {},
    },
    {
      name: 'Thêm',
      onPress: () => {},
      custom: <MoreAction />,
    },
  ];

  return (
    <View
      direction="row"
      align="center"
      justify="space-between"
      bgColor="#FFF"
      borderTopWidth={0.3}
      borderColor="#ccc">
      {ACTIONS.map(item => {
        const { icon, name, onPress, custom } = item;

        if (custom) {
          return <Fragment key={name}>{custom}</Fragment>;
        }

        return (
          <TouchableOpacity
            onPress={() => {
              onPress();
              // moreActionRef.current?.hide();
            }}
            py={10}
            px={20}
            activeOpacity={0.3}
            key={name}
            direction="row"
            gap={20}
            align="center">
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(HomeFooter);