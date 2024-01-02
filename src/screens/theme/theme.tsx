import { useEffect, useMemo, useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useRecoilState } from 'recoil';
import { NavigationBar } from '../../components';
import { SafeAreaView, View } from '../../controls';
import { darkModeAtom } from '../../states/common';

const Theme: React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const isDarkMode = darkMode === 'dark';
  const RADIO_DATA: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        label: 'Sáng',
        value: 'light',
        color: isDarkMode ? '#f2f2f2' : '#55bd42',
        labelStyle: { color: isDarkMode ? '#f2f2f2' : '#4f4f4f' },
        containerStyle: {
          width: '100%',
          paddingVertical: 4,
        },
      },
      {
        id: '2',
        label: 'Tối',
        value: 'dark',
        color: isDarkMode ? '#f2f2f2' : '#55bd42',
        labelStyle: { color: isDarkMode ? '#f2f2f2' : '#4f4f4f' },
        containerStyle: {
          width: '100%',
          paddingVertical: 4,
        },
      },
    ],
    [isDarkMode],
  );

  const [selectedId, setSelectedId] = useState<string>(() => {
    const currentMode = RADIO_DATA.find(i => i.value === darkMode);
    return currentMode?.id || '1';
  });

  useEffect(() => {
    const currentMode = RADIO_DATA.find(i => i.id === selectedId);
    setDarkMode(currentMode?.value || 'light');
  }, [RADIO_DATA, selectedId, setDarkMode]);

  return (
    <SafeAreaView>
      <NavigationBar title="Chủ đề" />

      <View flex={1} p={5}>
        <RadioGroup
          radioButtons={RADIO_DATA}
          onPress={data => {
            setSelectedId(data);
          }}
          selectedId={selectedId}
          containerStyle={{
            alignItems: 'flex-start',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Theme;
