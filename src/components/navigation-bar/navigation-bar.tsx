import { useNavigation } from '@react-navigation/native';
import { memo, useCallback } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, View } from '../../controls';
import { NavigationBarProps } from './navigation.type';

const NavigationBar: React.FC<NavigationBarProps> = props => {
  const {
    title = '',
    NavigationCenter,
    NavigationRight,
    onPressGoBack,
    showBack = true,
  } = props;

  const navigation = useNavigation<any>();
  const { width } = useWindowDimensions();
  const goBack = useCallback(() => {
    if (onPressGoBack) {
      onPressGoBack();
      return;
    }
    navigation.goBack();
  }, [navigation, onPressGoBack]);

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View
        direction="row"
        h={50}
        bgColor="#FFF"
        w={width}
        borderBottomWidth={0.5}
        borderColor="#e6e6e6">
        <View direction="row" flex={1} align="center">
          <View justify="center">
            {showBack && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goBack}
                style={{ paddingLeft: 15, paddingRight: 5 }}>
                <McIcon name="chevron-left" size={32} color="#828282" />
              </TouchableOpacity>
            )}
          </View>
          <View align="center" pl={showBack ? 0 : 16}>
            {!!NavigationCenter && NavigationCenter}
            {!!title && (
              <Text fontSize={18} fontFamily="Inter-SemiBold" color="#312412">
                {title}
              </Text>
            )}
          </View>
        </View>
        <View justify="flex-end" align="center" direction="row" pr={16}>
          {!!NavigationRight && NavigationRight}
        </View>
      </View>
    </>
  );
};

export default memo(NavigationBar);
