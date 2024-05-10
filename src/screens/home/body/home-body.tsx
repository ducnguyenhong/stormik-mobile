import { View } from '@src/controls';
import {
  keywordAtom,
  loadingAtom,
  tabsAtom,
  urlAtom,
} from '@src/states/common';
import { checkIsUrl, useSetHistory } from '@src/utils/helper';
import { memo, useCallback, useEffect, useRef } from 'react';
import ViewShot, { captureRef } from 'react-native-view-shot';
import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigation,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import HomeDefault from '../default';
import { refreshAtom } from '../subs/home.recoil';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);
  const [currentUrl, setCurrentUrl] = useRecoilState(urlAtom);
  const setHistory = useSetHistory();
  const [tabs, setTabs] = useRecoilState(tabsAtom);
  const webViewRef = useRef<any>();
  const [refresh, setRefresh] = useRecoilState(refreshAtom);
  const setLoading = useSetRecoilState(loadingAtom);
  const currentTab = tabs.find(i => !!i.isActive);
  const { type } = currentTab || {};
  const viewShotRef = useRef<any>(null);

  const onLoadEnd = useCallback(
    (e: WebViewNavigationEvent | WebViewErrorEvent) => {
      const { title, url } = e.nativeEvent;

      const isUrl = checkIsUrl(keyword);
      setHistory({ title, url, type: isUrl ? 'URL' : 'SEARCH' });

      captureRef(viewShotRef, {
        result: 'base64',
      })
        .then(uri => {
          const newTabs = tabs.map(i => {
            if (i.isActive) {
              return { ...i, url, title, thumbnail: uri };
            }
            return i;
          });
          setTabs(newTabs);
          setRefresh(false);
        })
        .catch(() => {
          const newTabs = tabs.map(i => {
            if (i.isActive) {
              return { ...i, url, title };
            }
            return i;
          });
          setTabs(newTabs);
          setRefresh(false);
        });
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
    <ViewShot ref={viewShotRef} style={{ flex: 1 }}>
      <View flex={1}>
        <WebView
          ref={webViewRef}
          pullToRefreshEnabled
          source={{ uri: currentUrl }}
          onLoadEnd={onLoadEnd}
          incognito={type === 'INCOGNITO'}
          onNavigationStateChange={(e: WebViewNavigation) => {
            const { url, loading } = e;
            setLoading(loading);
            if (url && url !== 'about:blank') {
              setCurrentUrl(url);
            }
          }}
        />
      </View>
    </ViewShot>
  );
};

export default memo(HomeBody);
