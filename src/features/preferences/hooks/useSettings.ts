import { useEffect, useState } from "react";
import { Settings } from "../types/settings";
import { loadSettings, saveSettings } from "../storage/settingsStorage";

const DEFAULT_SETTINGS: Settings = {
  gpsTracking: false,
  mapType: "standard",
  defaultExportUri: undefined,
  defaultExportName: undefined,
  showPoints: true,
  showLines: true,
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const loaded = await loadSettings(DEFAULT_SETTINGS);
      setSettings(loaded);
      setIsLoaded(true);
    };
    load();
  }, []);

  const setGpsTracking = (value: boolean) => {
    const newSettings = { ...settings, gpsTracking: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const setMapType = (value: Settings["mapType"]) => {
    const newSettings = { ...settings, mapType: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const toggleMapType = () => {
    setMapType(settings.mapType === "standard" ? "satellite" : "standard");
  };

  const setDefaultExportLocation = (uri?: string, name?: string) => {
    const newSettings = {
      ...settings,
      defaultExportUri: uri,
      defaultExportName: name,
    };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const setShowPoints = (value: boolean) => {
    const newSettings = { ...settings, showPoints: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const setShowLines = (value: boolean) => {
    const newSettings = { ...settings, showLines: value };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  return {
    gpsTracking: settings.gpsTracking,
    setGpsTracking,
    mapType: settings.mapType,
    setMapType,
    toggleMapType,
    defaultExportUri: settings.defaultExportUri,
    defaultExportName: settings.defaultExportName,
    setDefaultExportLocation,
    showPoints: settings.showPoints,
    showLines: settings.showLines,
    setShowPoints,
    setShowLines,
    isLoaded,
  };
}
