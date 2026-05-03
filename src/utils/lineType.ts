import { LineType, Place } from "../features/inventory";

export const DEFAULT_NEW_LINE_TYPE: LineType = "track";
export const DEFAULT_IMPORTED_LINE_TYPE: LineType = "line";

export const getLineType = (place: Place): LineType => {
  const lineType = place.attributes?.lineType;
  if (lineType === "track" || lineType === "stream" || lineType === "line") {
    return lineType;
  }
  return DEFAULT_IMPORTED_LINE_TYPE;
};

export const getLineTypeColor = (lineType: LineType): string => {
  if (lineType === "track") return "#2f855a";
  if (lineType === "stream") return "#2b6cb0";
  return "#000000";
};

export const getLineTypeIcon = (lineType: LineType): string => {
  if (lineType === "track") return "🛤";
  if (lineType === "stream") return "💧";
  return "📏";
};

export const getLineTypeLabelKey = (lineType: LineType) => {
  if (lineType === "track") return "lineTypeTrack" as const;
  if (lineType === "stream") return "lineTypeStream" as const;
  return "lineTypeLine" as const;
};
