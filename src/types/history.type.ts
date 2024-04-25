export interface HistoryType {
  title: string;
  type: 'URL' | 'SEARCH';
  url: string;
  domain: string;
  accessedAt?: number;
  favicon: string;
  id: string;
}
