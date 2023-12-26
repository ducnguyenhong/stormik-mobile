import { memo } from 'react';
import WebView from 'react-native-webview';
import { useRecoilValue } from 'recoil';
import { View } from '../../../controls';
import { keywordAtom } from '../../../states/common';
import HomeDefault from '../default';

const HomeBody: React.FC = () => {
  const keyword = useRecoilValue(keywordAtom);

  if (!keyword) {
    return <HomeDefault />;
  }

  return (
    <View flex={1}>
      <WebView source={{ uri: keyword }} />
    </View>
  );
};

export default memo(HomeBody);
