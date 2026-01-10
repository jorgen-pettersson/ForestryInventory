import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Pressable, Alert} from 'react-native';
import {InventoryItem} from '../../types';
import {sidebarStyles as styles} from '../../styles';
import {ItemCard} from './ItemCard';

interface SidebarProps {
  visible: boolean;
  items: InventoryItem[];
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (item: InventoryItem) => void;
  onReposition: (item: InventoryItem) => void;
  onExport: (format: 'json' | 'csv' | 'geojson' | 'all') => void;
  onImport: () => void;
  onClose: () => void;
}

export function Sidebar({
  visible,
  items,
  onToggleVisibility,
  onDelete,
  onView,
  onReposition,
  onExport,
  onImport,
  onClose,
}: SidebarProps) {
  if (!visible) {
    return null;
  }

  const handleExport = () => {
    Alert.alert('Export Format', 'Choose export format:', [
      {
        text: 'All formats',
        onPress: () => onExport('all'),
      },
      {
        text: 'JSON only',
        onPress: () => onExport('json'),
      },
      {
        text: 'CSV only',
        onPress: () => onExport('csv'),
      },
      {
        text: 'GeoJSON only',
        onPress: () => onExport('geojson'),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  return (
    <>
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Items ({items.length})</Text>
        <ScrollView style={styles.itemsList}>
          {items.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              onToggleVisibility={onToggleVisibility}
              onDelete={onDelete}
              onView={onView}
              onReposition={onReposition}
            />
          ))}
        </ScrollView>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.exportButton} onPress={handleExport}>
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.importButton} onPress={onImport}>
            <Text style={styles.exportText}>Import</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
