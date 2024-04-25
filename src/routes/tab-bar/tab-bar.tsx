import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@src/screens/home';
import { MAIN_COLOR } from '@src/utils/const';
import { memo } from 'react';
import { Platform } from 'react-native';
import { getIconTab } from './tab-bar.data';

const BottomTab = createBottomTabNavigator();

const TabBar = () => {
  const STACK_DATA = [
    {
      component: Home,
      label: 'Discovery',
      name: 'DiscoveryTab',
    },
    {
      component: Home,
      label: 'Search',
      name: 'SearchTab',
    },
    {
      component: Home,
      label: 'Home',
      name: 'HomeTab',
    },
    {
      component: Home,
      label: 'Tabs',
      name: 'TabsTab',
    },
    {
      component: Home,
      label: 'More',
      name: 'MoreTab',
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getIconTab(route.name, focused),
        tabBarActiveTintColor: MAIN_COLOR,
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 90,
          paddingTop: 8,
          overflow: 'hidden',
          shadowColor: '#e6e6e6',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
          // borderWidth: 1,
        },
        headerTitleStyle: { color: '#FFF' },
        tabBarLabelStyle: {
          marginBottom: 3,
          fontSize: 11,
          fontFamily: 'Poppins-Regular',
        },
        headerShown: false,
        tabBarShowLabel: true,
      })}>
      {STACK_DATA.map(item => (
        <BottomTab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
            tabBarLabel: item.label,
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default memo(TabBar);
