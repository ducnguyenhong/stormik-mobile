import { useNavigation } from '@react-navigation/native';
import { memo, useRef } from 'react';
import { FlatList } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, View } from '../../../../controls';
import { MORE_ACTION } from './header.data';

const MoreAction: React.FC = () => {
  const navigation = useNavigation<any>();
  const moreActionRef = useRef<ActionSheetRef>(null);

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
        <McIcon name="dots-horizontal" size={27} color="#828282" />
      </TouchableOpacity>

      <ActionSheet ref={moreActionRef} useBottomSafeAreaPadding>
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
                  onPress={() => {
                    navigation.navigate(route);
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
