import { memo, useCallback } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import { Text, TouchableOpacity, View } from '../../controls';
import { historyAtom } from './subs/history.recoil';

const History: React.FC = () => {
  const [historyList, setHistoryList] = useRecoilState(historyAtom);

  console.log('ducnh historyList', historyList);

  const onDeleteHistory = useCallback(
    (id: string) => {
      const newHistory = historyList.filter(i => i.id !== id);
      setHistoryList(newHistory);
    },
    [historyList, setHistoryList],
  );

  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
      <FlatList
        data={historyList}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => {
          const { title, type, url, domain, accessedAt, favicon, id } = item;
          return (
            <TouchableOpacity
              py={5}
              direction="row"
              px={16}
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
                  <Text>fav</Text>
                </View>
                <View>
                  <Text numberOfLines={1} fontSize={15}>
                    {title || url}
                  </Text>
                  <Text fontSize={13}>{domain}</Text>
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
