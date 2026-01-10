import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {crosshairStyles as styles} from '../styles';
import {DrawingMode} from '../types';

interface CrosshairProps {
  drawingMode: DrawingMode;
  areaPointsCount: number;
  repositionType?: 'point' | 'area';
  onConfirm: () => void;
  onCompleteReposition?: () => void;
  onCancelReposition?: () => void;
}

export function Crosshair({
  drawingMode,
  areaPointsCount,
  repositionType,
  onConfirm,
  onCompleteReposition,
  onCancelReposition,
}: CrosshairProps) {
  if (drawingMode === 'none') {
    return null;
  }

  const getButtonText = () => {
    if (drawingMode === 'point') {
      return 'Place Point';
    }
    if (drawingMode === 'area') {
      return `Add Point ${areaPointsCount + 1}`;
    }
    if (drawingMode === 'reposition') {
      if (repositionType === 'point') {
        return 'Set New Position';
      }
      return `Add Point ${areaPointsCount + 1}`;
    }
    return '';
  };

  return (
    <>
      <View style={styles.crosshairContainer} pointerEvents="none">
        <View style={styles.crosshairVertical} />
        <View style={styles.crosshairHorizontal} />
        <View style={styles.crosshairCenter} />
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
        <Text style={styles.confirmButtonText}>{getButtonText()}</Text>
      </TouchableOpacity>

      {drawingMode === 'reposition' && (
        <View style={styles.repositionButtons}>
          {repositionType === 'area' && areaPointsCount >= 3 && (
            <TouchableOpacity
              style={styles.completeButton}
              onPress={onCompleteReposition}>
              <Text style={styles.confirmButtonText}>Complete</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.cancelRepositionButton}
            onPress={onCancelReposition}>
            <Text style={styles.confirmButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
