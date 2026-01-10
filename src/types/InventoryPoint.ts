import {Coordinate} from './Coordinate';
import {InventoryItemBase} from './InventoryItemBase';

export interface InventoryPoint extends InventoryItemBase {
  type: 'point';
  coordinate: Coordinate;
}
