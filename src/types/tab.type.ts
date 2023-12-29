export interface TabType {
  id: string;
  url: string;
  title: string;
  isActive: boolean;
  type: 'NORMAL' | 'INCOGNITO';
  favicon?: string;
}
