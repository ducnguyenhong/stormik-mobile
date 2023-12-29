import { memo, useCallback } from 'react';
import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
import { useRecoilState, useRecoilValue } from 'recoil';
import { View } from '../../../controls';
import { keywordAtom, tabsAtom } from '../../../states/common';
import { useSetHistory } from '../../../utils/helper';
import HomeDefault from '../default';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);
  const setHistory = useSetHistory();
  const [tabs, setTabs] = useRecoilState(tabsAtom);

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
      }
    },
    [keyword, setHistory, setTabs, tabs],
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
      <WebView source={{ uri: keyword }} onLoadEnd={onLoadEnd} />
    </View>
  );
};

export default memo(HomeBody);
