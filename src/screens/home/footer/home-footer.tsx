import { isEmpty } from 'lodash';
import { Fragment, memo, useMemo } from 'react';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { TouchableOpacity, View } from '../../../controls';
import {
  darkModeAtom,
  historyAtom,
  keywordAtom,
  urlAtom,
} from '../../../states/common';
import { useAddTab, useSetHistory } from '../../../utils/helper';
import { refreshAtom } from '../subs/home.recoil';
import MoreAction from './components/more-action';

const HomeFooter: React.FC = () => {
  const addTab = useAddTab();
  const [url, setUrl] = useRecoilState(urlAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const setRefresh = useSetRecoilState(refreshAtom);
  const setKeyword = useSetRecoilState(keywordAtom);
  const history = useRecoilValue(historyAtom);
  const setHistory = useSetHistory();
  const lastHistory = history[1];

  const backIconColor = useMemo(() => {
    const disabled = isEmpty(lastHistory) || !url;
    if (isDarkMode) {
      return disabled ? '#828282' : '#f2f2f2';
    }
    return disabled ? '#d9d9d9' : '#828282';
  }, [isDarkMode, lastHistory, url]);

  const refreshIconColor = useMemo(() => {
    const disabled = !url;
    if (isDarkMode) {
      return disabled ? '#828282' : '#f2f2f2';
    }
    return disabled ? '#d9d9d9' : '#828282';
  }, [isDarkMode, url]);

  const ACTIONS = [
    {
      icon: <McIcon name="arrow-left" size={25} color={backIconColor} />,
      name: 'Quay lại',
      onPress: () => {
        const { title: lastTitle, url: lastUrl, type: lastType } = lastHistory;
        if (!lastUrl) {
          setUrl('');
          setKeyword('');
          setHistory({ title: 'Trang chủ', url: '' });
          return;
        }
        setHistory({ title: lastTitle, url: lastUrl, type: lastType });
      },
      disabled: isEmpty(lastHistory) || !url,
    },
    {
      icon: <McIcon name="refresh" size={25} color={refreshIconColor} />,
      name: 'Tải lại',
      onPress: () => {
        if (!url) {
          return;
        }
        setRefresh(true);
      },
      disabled: !url,
    },
    {
      icon: (
        <McIcon
          name="arrow-right"
          size={25}
          color={isDarkMode ? '#f2f2f2' : '#828282'}
        />
      ),
      name: 'Tiến',
      onPress: () => {},
    },
    {
      icon: (
        <McIcon
          name="plus"
          size={27}
          color={isDarkMode ? '#f2f2f2' : '#828282'}
        />
      ),
      name: 'Thẻ mới',
      onPress: () => addTab(),
    },
    {
      name: 'Thêm',
      onPress: () => {},
      custom: <MoreAction />,
    },
  ];

  return (
    <View
      direction="row"
      align="center"
      justify="space-between"
      bgColor={isDarkMode ? '#1a1a1a' : '#FFF'}
      borderTopWidth={0.3}
      borderColor="#ccc">
      {ACTIONS.map(item => {
        const { icon, name, onPress, custom, disabled } = item;

        if (custom) {
          return <Fragment key={name}>{custom}</Fragment>;
        }

        return (
          <TouchableOpacity
            onPress={() => onPress()}
            disabled={disabled}
            py={10}
            px={20}
            activeOpacity={disabled ? 1 : 0.3}
            key={name}
            direction="row"
            gap={20}
            align="center">
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(HomeFooter);
