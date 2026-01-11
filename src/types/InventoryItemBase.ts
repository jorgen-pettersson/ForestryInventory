import {HistoryEntry} from './HistoryEntry';
import {MediaItem} from './MediaItem';
import {UUID} from './UUID';

export interface InventoryItemBase {
  id: UUID;
  name: string;
  notes: string;
  visible: boolean;
  created: string;
  history: HistoryEntry[];
  media: MediaItem[];
  properties?: Record<string, any>;
}
