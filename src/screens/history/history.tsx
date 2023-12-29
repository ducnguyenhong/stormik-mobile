import { memo, useCallback } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import { NavigationBar } from '../../components';
import { Text, TouchableOpacity, View } from '../../controls';
import { historyAtom } from './subs/history.recoil';

const History: React.FC = () => {
  const [historyList, setHistoryList] = useRecoilState(historyAtom);

  const onDeleteHistory = useCallback(
    (id: string) => {
      const newHistory = historyList.filter(i => i.id !== id);
      setHistoryList(newHistory);
    },
    [historyList, setHistoryList],
  );

  const onDeleteAllHistory = useCallback(() => {
    setHistoryList([]);
  }, [setHistoryList]);

  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
      <NavigationBar title="Lịch sử hoạt động" />
      {!!historyList.length && (
        <View px={16} mt={10}>
          <TouchableOpacity onPress={onDeleteAllHistory}>
            <Text fontSize={16} color="red" fontFamily="Inter-Medium">
              Xoá tất cả lịch sử
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={historyList}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{ gap: 10, marginTop: 10 }}
        renderItem={({ item }) => {
          const { title, type, url, domain, accessedAt, favicon, id } = item;
          return (
            <TouchableOpacity
              py={5}
              direction="row"
              px={16}
              gap={15}
              justify="space-between"
              align="center">
              <View direction="row" flex={1} gap={15}>
                <View
                  w={40}
                  h={40}
                  borderRadius={30}
                  bgColor="#f2f2f2"
                  align="center"
                  justify="center">
                  <FaIcon name="globe" color="#b9b9b9" size={20} />
                </View>
                <View flex={1}>
                  <Text
                    numberOfLines={1}
                    fontSize={15}
                    fontFamily="Inter-Medium">
                    {title || url}
                  </Text>
                  <Text fontSize={13} color="#828282">
                    {domain}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => onDeleteHistory(id)}>
                <Ionicon name="close-circle" size={25} />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default memo(History);
