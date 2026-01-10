import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {toolPanelStyles as styles} from '../styles';
import {DrawingMode} from '../types';

type MapType = 'standard' | 'satellite' | 'hybrid';

interface ToolPanelProps {
  visible: boolean;
  onClose: () => void;
  gpsTracking: boolean;
  onToggleGPS: () => void;
  mapType: MapType;
  onToggleMapType: () => void;
  drawingMode: DrawingMode;
  onSetDrawingMode: (mode: DrawingMode) => void;
  areaPointsCount: number;
  onCompleteArea: () => void;
  onClearDrawing: () => void;
  sidebarVisible: boolean;
  onToggleSidebar: () => void;
}

export function ToolPanel({
  visible,
  onClose,
  gpsTracking,
  onToggleGPS,
  mapType,
  onToggleMapType,
  drawingMode,
  onSetDrawingMode,
  areaPointsCount,
  onCompleteArea,
  onClearDrawing,
  sidebarVisible,
  onToggleSidebar,
}: ToolPanelProps) {
  if (!visible) {
    return null;
  }

  const handleAction = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.sideSheet}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tools</Text>
        </View>

        <View style={styles.menuItems}>
          <TouchableOpacity
            style={[styles.toolButton, gpsTracking && styles.activeButton]}
            onPress={() => handleAction(onToggleGPS)}>
            <Text style={styles.buttonIcon}>📍</Text>
            <Text style={[styles.buttonText, gpsTracking && styles.activeButtonText]}>
              GPS Tracking
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toolButton, mapType !== 'standard' && styles.activeButton]}
            onPress={() => handleAction(onToggleMapType)}>
            <Text style={styles.buttonIcon}>🛰</Text>
            <Text style={[styles.buttonText, mapType !== 'standard' && styles.activeButtonText]}>
              Satellite View
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.toolButton, drawingMode === 'point' && styles.activeButton]}
            onPress={() => handleAction(() => onSetDrawingMode(drawingMode === 'point' ? 'none' : 'point'))}>
            <Text style={styles.buttonIcon}>📌</Text>
            <Text style={[styles.buttonText, drawingMode === 'point' && styles.activeButtonText]}>
              Add Point
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toolButton, drawingMode === 'area' && styles.activeButton]}
            onPress={() => handleAction(() => onSetDrawingMode(drawingMode === 'area' ? 'none' : 'area'))}>
            <Text style={styles.buttonIcon}>⬜</Text>
            <Text style={[styles.buttonText, drawingMode === 'area' && styles.activeButtonText]}>
              Draw Area
            </Text>
          </TouchableOpacity>

          {drawingMode === 'area' && areaPointsCount >= 3 && (
            <TouchableOpacity
              style={styles.toolButton}
              onPress={() => handleAction(onCompleteArea)}>
              <Text style={styles.buttonIcon}>✓</Text>
              <Text style={styles.buttonText}>Complete Area</Text>
            </TouchableOpacity>
          )}

          {(drawingMode !== 'none' || areaPointsCount > 0) && (
            <TouchableOpacity
              style={styles.toolButton}
              onPress={() => handleAction(onClearDrawing)}>
              <Text style={styles.buttonIcon}>✗</Text>
              <Text style={styles.buttonText}>Clear Drawing</Text>
            </TouchableOpacity>
          )}

          <View style={styles.divider} />

          <TouchableOpacity
            style={[styles.toolButton, sidebarVisible && styles.activeButton]}
            onPress={() => handleAction(onToggleSidebar)}>
            <Text style={styles.buttonIcon}>📋</Text>
            <Text style={[styles.buttonText, sidebarVisible && styles.activeButtonText]}>
              Items List
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

interface MenuToggleButtonProps {
  onPress: () => void;
}

export function MenuToggleButton({onPress}: MenuToggleButtonProps) {
  return (
    <TouchableOpacity style={styles.menuToggle} onPress={onPress}>
      <Text style={styles.menuToggleText}>☰</Text>
    </TouchableOpacity>
  );
}
