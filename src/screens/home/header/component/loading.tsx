import { memo, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { View } from '../../../../controls';
import { loadingAtom } from '../../../../states/common';

const Loading: React.FC = () => {
  const [loadingWidth, setLoadingWidth] = useState(0);
  const [loading, setLoading] = useRecoilState(loadingAtom);

  useEffect(() => {
    const setLoadingInterval = setInterval(() => {
      if (loading) {
        setLoadingWidth(prev => (prev < 75 ? prev + 1 : 75));
      }
    }, 10);

    return () => clearInterval(setLoadingInterval);
  }, [loading]);

  useEffect(() => {
    const setLoadingInterval = setInterval(() => {
      if (loading === false && loadingWidth < 100) {
        setLoadingWidth(prev => (prev < 100 ? prev + 1 : 100));
      }
    }, 3);

    return () => clearInterval(setLoadingInterval);
  }, [loading, loadingWidth]);

  useEffect(() => {
    if (loadingWidth === 100) {
      setLoading(undefined);
      setLoadingWidth(0);
    }
  }, [loadingWidth, setLoading]);

  return (
    <View
      w={loadingWidth === 100 ? '0%' : `${loadingWidth}%`}
      h={1}
      bgColor="green"
      position="absolute"
      bottom={0}
      left={0}
      borderRadius={1}
    />
  );
};

export default memo(Loading);
