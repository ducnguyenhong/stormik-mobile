import { memo } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Image, Text, TouchableOpacity, View } from '../../../controls';
import { historyAtom, keywordAtom } from '../../../states/common';

const HomeHistory: React.FC = () => {
  const setKeyword = useSetRecoilState(keywordAtom);
  const historyList = useRecoilValue(historyAtom);

  const HISTORY_LIST = [
    {
      favicon: 'https://www.24h.com.vn/favicon.ico',
      title: '24h',
      url: 'https://www.24h.com.vn',
    },
    {
      favicon:
        'https://s1.vnecdn.net/vnexpress/restruct/i/v848/logos/114x114.png',
      title: 'VnExpress',
      url: 'https://vnexpress.net',
    },
    {
      favicon: 'https://static.znews.vn/favicon/v005/app_192x192.png',
      title: 'ZNews',
      url: 'https://znews.vn',
    },
    {
      favicon: 'https://vtv1.mediacdn.vn/web_images/vtv192.png',
      title: 'VTV',
      url: 'https://vtv.vn',
    },
  ];

  return (
    <View direction="row" flexWrap="wrap" px={20} rowGap={15} mt={40}>
      {HISTORY_LIST.map((item, index) => (
        <TouchableOpacity
          onPress={() => setKeyword(item.url)}
          key={index}
          w="25%"
          align="center"
          px={5}
          justify="center"
          gap={5}>
          <View
            bgColor="#f2f2f2"
            w={50}
            h={50}
            borderRadius={30}
            align="center"
            justify="center">
            <Image url={item.favicon} w={20} h={20} />
          </View>
          <Text fontSize={13}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      {historyList.slice(0, 4).map((item: any) => (
        <TouchableOpacity
          onPress={() => setKeyword(item.url)}
          key={item.id}
          w="25%"
          px={5}
          align="center"
          justify="center"
          gap={5}>
          <View
            bgColor="#f2f2f2"
            w={50}
            h={50}
            borderRadius={30}
            align="center"
            justify="center">
            <FaIcon name="globe" color="#b9b9b9" size={20} />
          </View>
          <Text fontSize={13} numberOfLines={1}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(HomeHistory);
