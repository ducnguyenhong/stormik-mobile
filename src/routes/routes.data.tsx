import Home from '../screens/home';

interface Route {
  component: any;
  name: string;
}

export const ROUTES: Route[] = [
  {
    name: 'Home',
    component: Home,
  },
];
