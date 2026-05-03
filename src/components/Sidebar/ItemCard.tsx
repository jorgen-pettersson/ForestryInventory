import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Place } from "../../features/inventory";
import { itemCardStyles as styles } from "../../styles";
import {
  formatArea,
  getLineType,
  getLineTypeIcon,
  getLineTypeLabelKey,
  getPlaceAreaHa,
  getPlaceLengthMeters,
} from "../../utils";
import { useLocalization } from "../../localization";

interface ItemCardProps {
  item: Place;
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (item: Place) => void;
  onReposition: (item: Place) => void;
  onSplit: (item: Place) => void;
}

export function ItemCard({
  item,
  onToggleVisibility,
  onDelete,
  onView,
  onReposition,
  onSplit,
}: ItemCardProps) {
  const { t } = useLocalization();
  const lineType = item.placeType === "Place_Line" ? getLineType(item) : null;
  return (
    <TouchableOpacity
      style={[styles.itemCard, item.visible === false && styles.itemCardHidden]}
      onPress={() => onView(item)}
      activeOpacity={0.7}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.itemType}>
          {item.placeType === "Place_Point"
            ? "📌"
            : item.placeType === "Place_Line"
              ? getLineTypeIcon(lineType || "line")
              : "⬜"}
        </Text>
        <Text style={styles.itemName}>{item.attributes?.name || ""}</Text>
        <TouchableOpacity
          style={styles.visibilityButton}
          onPress={() => onToggleVisibility(item.id)}
        >
          <Text style={styles.visibilityText}>
            {item.visible !== false ? "👁" : "👁‍🗨"}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.itemDetail}>
        {item.createdAt ? new Date(item.createdAt).toLocaleString() : ""}
      </Text>
      {item.placeType === "Place_Area" &&
        (() => {
          const areaHa = getPlaceAreaHa(item);
          if (areaHa === undefined) return null;
          return (
            <Text style={styles.itemDetail}>
              Area: {formatArea(areaHa * 10000)}
            </Text>
          );
        })()}
      {item.placeType === "Place_Line" &&
        (() => {
          const lengthM = getPlaceLengthMeters(item);
          if (!lengthM) return null;
          return (
            <Text style={styles.itemDetail}>
              {t(getLineTypeLabelKey(lineType || "line"))}:{" "}
              {lengthM >= 1000
                ? `${(lengthM / 1000).toFixed(2)} km`
                : `${Math.round(lengthM)} m`}
            </Text>
          );
        })()}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.repositionButton}
          onPress={() => onReposition(item)}
        >
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>
        {item.placeType === "Place_Area" && (
          <TouchableOpacity
            style={styles.repositionButton}
            onPress={() => onSplit(item)}
          >
            <Text style={styles.buttonText}>
              {item.attributes?.splitLine ? t("adjustSplit") : t("split")}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
