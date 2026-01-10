import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import {InventoryItem, Coordinate, HistoryEntry} from '../types';
import {STORAGE_KEY} from '../constants';

export function useInventory() {
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [items]);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        // Ensure backwards compatibility for items without history/media
        const migratedItems = parsed.map((item: InventoryItem) => ({
          ...item,
          history: (item.history || []).map((entry: HistoryEntry) => ({
            ...entry,
            media: entry.media || [],
          })),
          media: item.media || [],
        }));
        setItems(migratedItems);
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const addItem = (item: InventoryItem) => {
    setItems(prev => [...prev, item]);
  };

  const updateItem = (updatedItem: InventoryItem) => {
    setItems(prev =>
      prev.map(item => (item.id === updatedItem.id ? updatedItem : item)),
    );
  };

  const cleanupItemMedia = async (item: InventoryItem) => {
    // Delete item media files
    for (const media of item.media || []) {
      try {
        const filePath = media.uri.replace('file://', '');
        const exists = await RNFS.exists(filePath);
        if (exists) {
          await RNFS.unlink(filePath);
        }
      } catch (error) {
        console.log('Error deleting media file:', error);
      }
    }

    // Delete history entry media files
    for (const entry of item.history || []) {
      for (const media of entry.media || []) {
        try {
          const filePath = media.uri.replace('file://', '');
          const exists = await RNFS.exists(filePath);
          if (exists) {
            await RNFS.unlink(filePath);
          }
        } catch (error) {
          console.log('Error deleting media file:', error);
        }
      }
    }
  };

  const deleteItem = (id: string) => {
    Alert.alert('Delete Item', 'Are you sure?', [
      {text: 'Cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const itemToDelete = items.find(item => item.id === id);
          if (itemToDelete) {
            await cleanupItemMedia(itemToDelete);
          }
          setItems(prev => prev.filter(item => item.id !== id));
        },
      },
    ]);
  };

  const toggleItemVisibility = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? {...item, visible: !item.visible} : item,
      ),
    );
  };

  const calculateArea = (coords: Coordinate[]): number => {
    let area = 0;
    for (let i = 0; i < coords.length; i++) {
      const j = (i + 1) % coords.length;
      area += coords[i].latitude * coords[j].longitude;
      area -= coords[j].latitude * coords[i].longitude;
    }
    return Math.abs(area / 2) * 111320 * 111320;
  };

  const importItems = (newItems: InventoryItem[]) => {
    setItems(newItems);
  };

  const appendItems = (newItems: InventoryItem[]) => {
    setItems(prev => [...prev, ...newItems]);
  };

  return {
    items,
    addItem,
    updateItem,
    deleteItem,
    toggleItemVisibility,
    calculateArea,
    importItems,
    appendItems,
  };
}
