import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { Place } from "../../features/inventory";
import { sidebarStyles as styles } from "../../styles";
import { ItemCard } from "./ItemCard";
import { useLocalization } from "../../localization";

interface SidebarProps {
  visible: boolean;
  items: Place[];
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (item: Place) => void;
  onReposition: (item: Place) => void;
  onSplit: (item: Place) => void;
  onExport: (format: "json" | "csv" | "geojson" | "all") => void;
  hasDefaultExportLocation: boolean;
  onSetDefaultExportLocation: () => void;
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
  onSplit,
  onExport,
  hasDefaultExportLocation,
  onSetDefaultExportLocation,
  onImport,
  onClose,
}: SidebarProps) {
  if (!visible) {
    return null;
  }

  const { t } = useLocalization();

  const handleExport = () => {
    if (hasDefaultExportLocation) {
      onExport("all");
      return;
    }

    Alert.alert(t("defaultExportLocation"), t("setDefaultExportLocationHint"), [
      {
        text: t("setDefaultExportLocation"),
        onPress: onSetDefaultExportLocation,
      },
      {
        text: t("cancel"),
        style: "cancel",
      },
    ]);
  };

  return (
    <>
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>
          {t("itemsCount", { count: items.length })}
        </Text>
        <ScrollView style={styles.itemsList}>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onToggleVisibility={onToggleVisibility}
              onDelete={onDelete}
              onView={onView}
              onReposition={onReposition}
              onSplit={onSplit}
            />
          ))}
        </ScrollView>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.exportButton}
            onPress={onSetDefaultExportLocation}
          >
            <Text style={styles.exportText}>{t("setExportLocation")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportButton} onPress={handleExport}>
            <Text style={styles.exportText}>{t("exportOneClick")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.importButton} onPress={onImport}>
            <Text style={styles.exportText}>{t("import")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
