import dayjs from 'dayjs';
import { memo, useCallback } from 'react';
import uuid from 'react-native-uuid';
import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { View } from '../../../controls';
import { keywordAtom } from '../../../states/common';
import { getDomainWebsite } from '../../../utils/helper';
import { historyAtom } from '../../history/subs/history.recoil';
import HomeDefault from '../default';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);
  const setHistoryList: any = useSetRecoilState(historyAtom);

  const onLoadEnd = useCallback(
    (e: WebViewNavigationEvent | WebViewErrorEvent) => {
      const { title, url } = e.nativeEvent;

      if (keyword) {
        setHistoryList((prev: any) => {
          const lastHistory = prev[0];
          if (lastHistory?.url === url) {
            const newHistory = prev.shift();
            return [
              {
                title,
                type: 'URL', // 'SEARCH'
                url,
                domain: getDomainWebsite(keyword),
                accessedAt: dayjs().valueOf(),
                favicon: '',
                id: uuid.v4(),
              },
              ...newHistory,
            ];
          }
          return [
            {
              title,
              type: 'URL', // 'SEARCH'
              url,
              domain: getDomainWebsite(keyword),
              accessedAt: dayjs().valueOf(),
              favicon: '',
              id: uuid.v4(),
            },
            ...prev,
          ];
        });
      }
    },
    [keyword, setHistoryList],
  );

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => {
  //       backScreen ? navigation.navigate(backScreen) : navigation.goBack();
  //       return true;
  //     },
  //   );

  //   return () => backHandler.remove();
  // }, [backScreen, navigation]);

  if (!keyword) {
    return <HomeDefault />;
  }

  return (
    <View flex={1}>
      <WebView icon source={{ uri: keyword }} onLoadEnd={onLoadEnd} />
    </View>
  );
};

export default memo(HomeBody);
