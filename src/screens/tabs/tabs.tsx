import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import uuid from 'react-native-uuid';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Text, TouchableOpacity, View } from '../../controls';
import { keywordAtom, tabsAtom } from '../../states/common';
import { TabType } from '../../types/tab.type';
import { useAddTab } from '../../utils/helper';

const Tabs: React.FC = () => {
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const setKeyword = useSetRecoilState(keywordAtom);
  const addTab = useAddTab();
  const navigation = useNavigation<any>();

  const onChangeTab = useCallback(
    (item: TabType) => {
      setKeyword(item.url);
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
      navigation.navigate('Home');
    },
    [navigation, setKeyword, setTabs, tabs],
  );

  const onDeleteTab = useCallback(
    (id: string) => {
      const newTabs = tabs.filter(i => i.id !== id);
      setTabs(newTabs);
    },
    [setTabs, tabs],
  );

  const onAddTab = useCallback(() => {
    addTab({
      id: uuid.v4() as string,
      url: '',
      title: 'Trang chủ',
      isActive: true,
      type: 'NORMAL',
    });
    setKeyword('');
  }, [addTab, setKeyword]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View
        px={15}
        align="center"
        direction="row"
        justify="space-between"
        py={10}
        borderBottomWidth={0.5}
        borderColor="#e6e6e6">
        <TouchableOpacity
          direction="row"
          align="center"
          gap={5}
          onPress={onAddTab}>
          <Ionicon name="add" size={25} />
          <Text>Thẻ mới</Text>
        </TouchableOpacity>

        <TouchableOpacity direction="row" align="center" gap={5}>
          <McIcon name="dots-vertical" size={23} />
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={tabs.filter(i => i.type === 'NORMAL')}
        keyExtractor={(_, index) => `${index}`}
        contentContainerStyle={{
          gap: 15,
          paddingHorizontal: 15,
          marginTop: 15,
        }}
        renderItem={({ item, index }) => {
          const { title, isActive, id } = item;
          return (
            <TouchableOpacity
              onPress={() => onChangeTab(item)}
              mr={index % 2 !== 0 ? 0 : 5}
              ml={index % 2 === 0 ? 0 : 5}
              bgColor={isActive ? '#55bd42' : '#f2f2f2'}
              borderRadius={10}
              flex={1 / 2}>
              <View direction="row" align="center" px={8} py={5}>
                <View direction="row" gap={10} flex={1} align="center">
                  <FaIcon
                    name="globe"
                    color={isActive ? '#FFF' : '#b9b9b9'}
                    size={20}
                  />
                  <Text
                    flex={1}
                    numberOfLines={1}
                    fontFamily="Inter-SemiBold"
                    color={isActive ? '#FFF' : undefined}>
                    {title}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTab(id)} p={5}>
                  <Ionicon
                    name="close"
                    color={isActive ? '#FFF' : '#4f4f4f'}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <View h={150} bgColor="#FFF" mx={8} mb={8} borderRadius={5} p={5}>
                <Text>aaaa</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Tabs;
