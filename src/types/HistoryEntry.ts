import {MediaItem} from './MediaItem';

export interface HistoryEntry {
  timestamp: string;
  title: string;
  description: string;
  media: MediaItem[];
}
