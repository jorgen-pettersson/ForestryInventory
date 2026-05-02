import { Coordinate, Place } from "../features/inventory";

const toLatLng = (coord: number[]): Coordinate => ({
  latitude: coord[1],
  longitude: coord[0],
});

const toRadians = (deg: number) => (deg * Math.PI) / 180;

const segmentDistanceMeters = (a: Coordinate, b: Coordinate): number => {
  const earthRadiusMeters = 6371000;
  const lat1 = toRadians(a.latitude);
  const lat2 = toRadians(b.latitude);
  const deltaLat = toRadians(b.latitude - a.latitude);
  const deltaLng = toRadians(b.longitude - a.longitude);

  const h =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);

  return 2 * earthRadiusMeters * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
};

const lineLengthMeters = (coords: Coordinate[]): number => {
  let total = 0;
  for (let i = 1; i < coords.length; i += 1) {
    total += segmentDistanceMeters(coords[i - 1], coords[i]);
  }
  return total;
};

export const getPlaceLengthMeters = (place: Place): number | undefined => {
  const geometry = place.geometries?.[0]?.geometry;
  if (!geometry) return undefined;

  if (geometry.type === "LineString") {
    const coords = (geometry.coordinates as number[][]).map(toLatLng);
    return lineLengthMeters(coords);
  }

  if (geometry.type === "MultiLineString") {
    const lines = geometry.coordinates as number[][][];
    return lines.reduce(
      (sum, line) => sum + lineLengthMeters(line.map(toLatLng)),
      0,
    );
  }

  return undefined;
};
