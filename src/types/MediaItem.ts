export interface MediaItem {
  id: string;
  uri: string;
  type: 'photo' | 'video';
  timestamp: string;
  thumbnailUri?: string;
}
