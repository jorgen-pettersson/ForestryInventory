import React from 'react';
import {View} from 'react-native';
import MapView, {Marker, Polygon, PROVIDER_GOOGLE} from 'react-native-maps';
import {InventoryItem, Region, Coordinate, DrawingMode} from '../../types';
import {mapStyles as styles} from '../../styles';
import {Crosshair} from '../Crosshair';

type MapType = 'standard' | 'satellite' | 'hybrid';

interface InventoryMapProps {
  region: Region;
  onRegionChange: (region: Region) => void;
  mapType: MapType;
  items: InventoryItem[];
  areaPoints: Coordinate[];
  drawingMode: DrawingMode;
  repositionType?: 'point' | 'area';
  onConfirmLocation: () => void;
  onCompleteReposition?: () => void;
  onCancelReposition?: () => void;
}

export function InventoryMap({
  region,
  onRegionChange,
  mapType,
  items,
  areaPoints,
  drawingMode,
  repositionType,
  onConfirmLocation,
  onCompleteReposition,
  onCancelReposition,
}: InventoryMapProps) {
  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        mapType={mapType}
        onRegionChangeComplete={onRegionChange}
        showsUserLocation
        showsMyLocationButton>
        {items
          .filter(item => item.visible !== false)
          .map(item => {
            if (item.type === 'point') {
              return (
                <Marker
                  key={item.id}
                  coordinate={item.coordinate}
                  title={item.name}
                  description={item.notes}
                  pinColor="green"
                />
              );
            } else {
              return (
                <Polygon
                  key={item.id}
                  coordinates={item.coordinates}
                  strokeColor="green"
                  fillColor="rgba(0,255,0,0.3)"
                  strokeWidth={2}
                />
              );
            }
          })}

        {areaPoints.length > 0 && (
          <Polygon
            coordinates={areaPoints}
            strokeColor="blue"
            fillColor="rgba(0,0,255,0.2)"
            strokeWidth={2}
          />
        )}
      </MapView>

      <Crosshair
        drawingMode={drawingMode}
        areaPointsCount={areaPoints.length}
        repositionType={repositionType}
        onConfirm={onConfirmLocation}
        onCompleteReposition={onCompleteReposition}
        onCancelReposition={onCancelReposition}
      />
    </View>
  );
}
