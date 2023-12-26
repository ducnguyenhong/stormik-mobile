import { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from '../../../controls';

const HomeHistory: React.FC = () => {
  const HISTORY_LIST = [
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
    {
      favicon:
        'https://www.youtube.com/s/desktop/28b0985e/img/favicon_48x48.png',
      title: 'Youtube',
    },
  ];

  return (
    <View direction="row" flexWrap="wrap" px={20} rowGap={15} mt={40}>
      {HISTORY_LIST.map((item, index) => (
        <TouchableOpacity
          key={index}
          w="25%"
          align="center"
          justify="center"
          gap={5}>
          <View
            bgColor="#f2f2f2"
            w={50}
            h={50}
            borderRadius={30}
            align="center"
            justify="center">
            <Image url={item.favicon} w={25} h={25} />
          </View>
          <Text fontSize={13}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(HomeHistory);
