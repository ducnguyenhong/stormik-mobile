import { Text, View } from '@src/controls';
import { MAIN_COLOR } from '@src/utils/const';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const getIconTab = (routeName: string, focused: boolean) => {
  switch (routeName) {
    case 'HomeTab':
      return focused ? (
        <IonIcon name="home" color={MAIN_COLOR} size={21} />
      ) : (
        <IonIcon name="home-outline" size={21} color="#4d4d4d" />
      );

    case 'SearchTab':
      return focused ? (
        <IonIcon name="search" color={MAIN_COLOR} size={23} />
      ) : (
        <IonIcon name="search-outline" size={23} color="#4d4d4d" />
      );

    case 'DiscoveryTab':
      return focused ? (
        <IonIcon name="compass" color={MAIN_COLOR} size={24} />
      ) : (
        <IonIcon name="compass-outline" color="#4d4d4d" size={24} />
      );

    case 'MoreTab':
      return focused ? (
        <IonIcon name="menu" color={MAIN_COLOR} size={25} />
      ) : (
        <IonIcon name="menu-outline" color="#4d4d4d" size={25} />
      );

    case 'TabsTab':
      return focused ? (
        <View position="relative">
          <IonIcon name="copy" color={MAIN_COLOR} size={22} />
          <View position="absolute" top={5} left={11}>
            <Text fontSize={12} fontFamily="Medium" color="#FFF">
              1
            </Text>
          </View>
        </View>
      ) : (
        <View position="relative">
          <IonIcon name="copy-outline" color="#4d4d4d" size={22} />
          <View position="absolute" top={5} left={11}>
            <Text fontSize={12} fontFamily="Medium">
              1
            </Text>
          </View>
        </View>
      );

    default:
      return null;
  }
};
