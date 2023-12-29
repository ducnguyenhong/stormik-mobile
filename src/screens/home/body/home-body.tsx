import { memo, useCallback } from 'react';
import WebView from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
import { useRecoilValue } from 'recoil';
import { View } from '../../../controls';
import { keywordAtom } from '../../../states/common';
import { useSetHistory } from '../../../utils/helper';
import HomeDefault from '../default';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);
  const setHistory = useSetHistory();

  const onLoadEnd = useCallback(
    (e: WebViewNavigationEvent | WebViewErrorEvent) => {
      const { title, url } = e.nativeEvent;

      if (keyword) {
        setHistory({ title, url });
      }
    },
    [keyword, setHistory],
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
