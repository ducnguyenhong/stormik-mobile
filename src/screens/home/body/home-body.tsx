import { memo, useCallback, useState } from 'react';
import WebView from 'react-native-webview';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { View } from '../../../controls';
import { keywordAtom } from '../../../states/common';
import { historyAtom } from '../../history/subs/history.recoil';
import HomeDefault from '../default';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);
  const [title, setTitle] = useState<string>('');
  const setHistoryList: any = useSetRecoilState(historyAtom);

  const onLoadEnd = useCallback(() => {
    // if (keyword) {
    console.log('ducnh 1');

    // setHistoryList((prev: any) => [
    //   {
    //     title,
    //     type: 'URL', // 'SEARCH'
    //     url: keyword,
    //     domain: getDomainWebsite(keyword),
    //     accessedAt: dayjs().valueOf(),
    //     favicon: '',
    //     id: uuid.v4(),
    //   },
    //   ...prev,
    // ]);
    // }
  }, []);

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
      <WebView
        icon
        source={{ uri: keyword }}
        onLoadEnd={onLoadEnd}
        injectedJavaScript="window.postMessage(document.title)"
        onMessage={message => setTitle(message.nativeEvent.data)}
      />
    </View>
  );
};

export default memo(HomeBody);
