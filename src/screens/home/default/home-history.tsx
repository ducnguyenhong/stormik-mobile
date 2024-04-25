import { Image, Text, TouchableOpacity, View } from '@src//controls';
import {
  darkModeAtom,
  historyAtom,
  keywordAtom,
  tabsAtom,
  urlAtom,
} from '@src/states/common';
import { HistoryType } from '@src/types/history.type';
import { memo, useCallback } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const HomeHistory: React.FC = () => {
  const setKeyword = useSetRecoilState(keywordAtom);
  const setUrl = useSetRecoilState(urlAtom);
  const historyList = useRecoilValue(historyAtom);
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';

  const HISTORY_LIST: HistoryType[] = [
    {
      favicon:
        'https://upload.wikimedia.org/wikipedia/vi/thumb/6/6b/Logo_trang_24h.png/220px-Logo_trang_24h.png',
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
    <View direction="row" flexWrap="wrap" px={10} rowGap={15} mt={50}>
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
            bgColor={isDarkMode ? '#828282' : '#FFF'}
            w={55}
            h={55}
            borderRadius={13}
            align="center"
            justify="center"
            boxShadow={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 1.5,
            }}>
            <Image url={item.favicon} w={28} h={28} resizeMode="cover" />
          </View>
          <Text fontSize={12} fontFamily="Medium">
            {item.title}
          </Text>
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
              bgColor={isDarkMode ? '#828282' : '#FFF'}
              w={55}
              h={55}
              borderRadius={13}
              align="center"
              justify="center"
              boxShadow={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.5,
                shadowRadius: 1,
                elevation: 1.5,
              }}>
              <FaIcon name="globe" color="#b9b9b9" size={28} />
            </View>
            <Text fontSize={12} numberOfLines={1} fontFamily="Medium">
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default memo(HomeHistory);
