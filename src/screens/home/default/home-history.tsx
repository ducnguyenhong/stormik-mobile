import { memo, useCallback } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Image, Text, TouchableOpacity, View } from '../../../controls';
import {
  darkModeAtom,
  historyAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '../../../states/common';
import { HistoryType } from '../../../types/history.type';

const HomeHistory: React.FC = () => {
  const setKeyword = useSetRecoilState(keywordAtom);
  const setUrl = useSetRecoilState(urlAtom);
  const historyList = useRecoilValue(historyAtom);
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

  const HISTORY_LIST: HistoryType[] = [
    {
      favicon: 'https://www.24h.com.vn/favicon.ico',
      title: '24h',
      url: 'https://www.24h.com.vn',
      id: '1',
      type: 'URL',
      domain: 'www.24h.com.vn',
    },
    {
      favicon:
        'https://s1.vnecdn.net/vnexpress/restruct/i/v848/logos/114x114.png',
      title: 'VnExpress',
      url: 'https://vnexpress.net',
      id: '2',
      type: 'URL',
      domain: 'vnexpress.net',
    },
    {
      favicon: 'https://static.znews.vn/favicon/v005/app_192x192.png',
      title: 'ZNews',
      url: 'https://znews.vn',
      id: '3',
      type: 'URL',
      domain: 'znews.vn',
    },
    {
      favicon: 'https://vtv1.mediacdn.vn/web_images/vtv192.png',
      title: 'VTV',
      url: 'https://vtv.vn',
      id: '4',
      type: 'URL',
      domain: 'vtv.vn',
    },
  ];

  const onOpenHistory = useCallback(
    (item: HistoryType) => {
      const { url, title } = item;
      const newsTabs = tabs.map(i => {
        if (i.isActive) {
          return { ...i, url, title };
        }
        return i;
      });
      setTabs(newsTabs);
      setKeyword(url);
      setUrl(url);
    },
    [setKeyword, setTabs, setUrl, tabs],
  );

  return (
    <View direction="row" flexWrap="wrap" px={10} rowGap={15} mt={40}>
      {HISTORY_LIST.map((item, index) => (
        <TouchableOpacity
          onPress={() => onOpenHistory(item)}
          key={index}
          w="25%"
          align="center"
          px={5}
          justify="center"
          gap={5}>
          <View
            bgColor={isDarkMode ? '#828282' : '#f2f2f2'}
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
      {historyList
        .filter(i => !!i.url)
        .slice(0, 4)
        .map(item => (
          <TouchableOpacity
            onPress={() => onOpenHistory(item)}
            key={item.id}
            w="25%"
            px={5}
            align="center"
            justify="center"
            gap={5}>
            <View
              bgColor={isDarkMode ? '#828282' : '#f2f2f2'}
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
