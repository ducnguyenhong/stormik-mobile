import { Suspense } from 'react';
import { View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Routes from './src/routes';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  //   LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  // }, []);

  return (
    <Suspense fallback={<View />}>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
