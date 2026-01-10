import {Coordinate} from './Coordinate';
import {InventoryItemBase} from './InventoryItemBase';

export interface InventoryArea extends InventoryItemBase {
  type: 'area';
  coordinates: Coordinate[];
  area?: number;
}
