import Ionicon from 'react-native-vector-icons/Ionicons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MORE_ACTION = [
  {
    icon: <McIcon name="plus" size={29} color="#55bd42" />,
    name: 'Thẻ mới',
    route: 'Page',
  },
  {
    icon: <McIcon name="incognito" size={25} color="#55bd42" />,
    name: 'Ẩn danh',
    route: 'IncognitoPage',
  },
  {
    icon: <McIcon name="history" size={25} color="#55bd42" />,
    name: 'Lịch sử',
    route: 'History',
  },
  {
    icon: <McIcon name="star" size={25} color="#55bd42" />,
    name: 'Dấu trang',
    route: 'Bookmark',
  },
  {
    icon: <Ionicon name="moon" size={21} color="#55bd42" />,
    name: 'Chủ đề',
    route: 'Theme',
  },
  {
    icon: <McIcon name="download" size={25} color="#55bd42" />,
    name: 'Tải xuống',
    route: 'Download',
  },
  {
    icon: <McIcon name="cog" size={24} color="#55bd42" />,
    name: 'Cài đặt',
    route: 'Setting',
  },
  {
    icon: <McIcon name="alert-circle-outline" size={25} color="#55bd42" />,
    name: 'Trợ giúp',
    route: 'Support',
  },
];
