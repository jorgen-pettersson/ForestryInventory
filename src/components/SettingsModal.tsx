import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { settingsModalStyles as styles } from "../styles";
import { Language, useLocalization } from "../localization";

interface SettingsModalProps {
  visible: boolean;
  language: Language;
  hasDefaultExportLocation: boolean;
  onSetLanguage: (lang: Language) => void;
  onSetDefaultExportLocation: () => void;
  onClose: () => void;
}

export function SettingsModal({
  visible,
  language,
  hasDefaultExportLocation,
  onSetLanguage,
  onSetDefaultExportLocation,
  onClose,
}: SettingsModalProps) {
  const { t } = useLocalization();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{t("settings")}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t("language")}</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.choiceButton,
                  language === "en" && styles.choiceButtonActive,
                ]}
                onPress={() => onSetLanguage("en")}
              >
                <Text
                  style={[
                    styles.choiceButtonText,
                    language === "en" && styles.choiceButtonTextActive,
                  ]}
                >
                  {t("english")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.choiceButton,
                  language === "sv" && styles.choiceButtonActive,
                ]}
                onPress={() => onSetLanguage("sv")}
              >
                <Text
                  style={[
                    styles.choiceButtonText,
                    language === "sv" && styles.choiceButtonTextActive,
                  ]}
                >
                  {t("swedish")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("defaultExportLocation")}
            </Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onSetDefaultExportLocation}
            >
              <Text style={styles.actionButtonText}>
                {t("setExportLocation")}
              </Text>
            </TouchableOpacity>
            <Text style={styles.hintText}>
              {hasDefaultExportLocation
                ? t("defaultExportLocationConfigured")
                : t("defaultExportLocationNotConfigured")}
            </Text>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>{t("close")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
