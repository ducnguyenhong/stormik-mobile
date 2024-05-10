import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from '@src/controls';
import {
  darkModeAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '@src/states/common';
import { TabType } from '@src/types/tab.type';
import { useAddTab, useGoHome } from '@src/utils/helper';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const setKeyword = useSetRecoilState(keywordAtom);
  const setUrl = useSetRecoilState(urlAtom);
  const addTab = useAddTab();
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const goHome = useGoHome();

  const tabData = tabs.filter(i => i.type === 'NORMAL');

  const onChangeTab = useCallback(
    (item: TabType) => {
      setKeyword(item.url);
      setUrl(item.url);
      const newTabs = tabs.map(t => {
        if (t.id === item.id) {
          return {
            ...t,
            isActive: true,
          };
        }
        return {
          ...t,
          isActive: false,
        };
      });
      setTabs(newTabs);
      goHome();
    },
    [goHome, setKeyword, setTabs, setUrl, tabs],
  );

  const onDeleteTab = useCallback(
    (id: string) => {
      const newTabs = tabs.filter(i => i.id !== id);
      setTabs(newTabs);
    },
    [setTabs, tabs],
  );

  const onAddTab = useCallback(() => {
    addTab();
  }, [addTab]);

  return (
    <SafeAreaView bgColor="#FFF">
      <View
        px={15}
        align="center"
        direction="row"
        justify="space-between"
        py={12}
        borderBottomWidth={0.5}
        borderColor="#e6e6e6">
        <TouchableOpacity
          direction="row"
          align="center"
          gap={5}
          onPress={onAddTab}>
          <Ionicon
            name="add"
            size={25}
            color={isDarkMode ? '#f2f2f2' : '#4f4f4f'}
          />
          <Text>Thẻ mới</Text>
        </TouchableOpacity>

        <TouchableOpacity direction="row" align="center" gap={5}>
          <McIcon name="dots-vertical" size={23} />
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={tabData}
        keyExtractor={(_, index) => `${index}`}
        contentContainerStyle={{
          gap: 18,
          paddingHorizontal: 18,
          marginTop: 18,
        }}
        renderItem={({ item, index }) => {
          const { title, isActive, id, thumbnail, url } = item;

          return (
            <TouchableOpacity
              onPress={() => onChangeTab(item)}
              mr={index % 2 !== 0 ? 0 : 7}
              ml={index % 2 === 0 ? 0 : 7}
              bgColor={isActive ? '#4DAE44' : '#e6e6e6'}
              borderRadius={15}
              flex={1 / 2}>
              <View direction="row" align="center" px={10} py={3}>
                <View direction="row" gap={6} flex={1} align="center">
                  <FaIcon
                    name="globe"
                    color={isActive ? '#FFF' : '#b9b9b9'}
                    size={18}
                  />
                  <Text
                    flex={1}
                    py={tabs.length > 1 ? 0 : 5}
                    numberOfLines={1}
                    fontFamily="Medium"
                    color={isActive ? '#FFF' : undefined}>
                    {title}
                  </Text>
                </View>
                {tabData.length > 1 && (
                  <TouchableOpacity
                    onPress={() => onDeleteTab(id)}
                    py={5}
                    pl={5}>
                    <Ionicon
                      name="close"
                      color={isActive ? '#FFF' : '#4f4f4f'}
                      size={20}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View h={180} bgColor="#FFF" mx={4} mb={4} borderRadius={12}>
                {!!thumbnail && (
                  <Image
                    w="100%"
                    h="170%"
                    resizeMode="stretch"
                    source={{ uri: `data:image/png;base64,${thumbnail}` }}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Tabs;
