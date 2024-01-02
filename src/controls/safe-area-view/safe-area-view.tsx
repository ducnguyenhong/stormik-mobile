import { memo, useMemo } from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../states/common';
import { SafeAreaViewProps } from './safe-area-view.type';

const SafeAreaView: React.FC<SafeAreaViewProps> = props => {
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const defaultBgColor = useMemo(
    () => (isDarkMode ? '#1a1a1a' : '#FFF'),
    [isDarkMode],
  );

  const {
    children,
    flex = 1,
    bgColor = defaultBgColor,
    p,
    style = {},
    ...rest
  } = props;

  return (
    <RNSafeAreaView
      style={{ backgroundColor: bgColor, flex, padding: p, ...style }}
      {...rest}>
      {children}
    </RNSafeAreaView>
  );
};

export default memo(SafeAreaView);
