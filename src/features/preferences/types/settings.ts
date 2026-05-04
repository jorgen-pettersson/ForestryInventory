export type MapType = "standard" | "satellite" | "hybrid";

export interface Settings {
  gpsTracking: boolean;
  mapType: MapType;
  defaultExportUri?: string;
  defaultExportName?: string;
}
