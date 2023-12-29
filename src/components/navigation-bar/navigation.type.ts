export interface NavigationBarProps {
  title?: string;
  NavigationCenter?: React.ReactNode;
  NavigationLeft?: React.ReactNode;
  NavigationRight?: React.ReactNode;
  onPressMore?: () => void;
  onPressSearch?: () => void;
  onPressGoBack?: () => void;
  showBack?: boolean;
  showNoti?: boolean;
  showSearch?: boolean;
}
