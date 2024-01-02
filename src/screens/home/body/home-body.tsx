import { memo, useCallback, useEffect, useRef } from 'react';
import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
import { useRecoilState, useRecoilValue } from 'recoil';
import { View } from '../../../controls';
import { keywordAtom, tabsAtom, urlAtom } from '../../../states/common';
import { useSetHistory } from '../../../utils/helper';
import HomeDefault from '../default';
import { refreshAtom } from '../subs/home.recoil';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);
  const currentUrl = useRecoilValue(urlAtom);
  const setHistory = useSetHistory();
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const webViewRef = useRef<any>();
  const [refresh, setRefresh] = useRecoilState(refreshAtom);

  const currentTab = tabs.find(i => !!i.isActive);
  const { type } = currentTab || {};

  const onLoadEnd = useCallback(
    (e: WebViewNavigationEvent | WebViewErrorEvent) => {
      const { title, url } = e.nativeEvent;

      if (keyword) {
        setHistory({ title, url });

        const newsTabs = tabs.map(i => {
          if (i.isActive) {
            return { ...i, url, title };
          }
          return i;
        });
        setTabs(newsTabs);
        setRefresh(false);
      }
    },
    [keyword, setHistory, setRefresh, setTabs, tabs],
  );

  useEffect(() => {
    if (refresh && currentUrl) {
      webViewRef.current.reload();
    }
  }, [currentUrl, refresh]);

  if (!keyword) {
    return <HomeDefault />;
  }

  return (
    <View flex={1}>
      <WebView
        ref={webViewRef}
        pullToRefreshEnabled
        source={{ uri: keyword }}
        onLoadEnd={onLoadEnd}
        incognito={type === 'INCOGNITO'}
      />
    </View>
  );
};

export default memo(HomeBody);
