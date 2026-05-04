import { StyleSheet } from "react-native";

export const settingsModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    maxWidth: 420,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 16,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  choiceButton: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#f9fafb",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  choiceButtonActive: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  choiceButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  choiceButtonTextActive: {
    color: "#ffffff",
  },
  actionButton: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 11,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  hintText: {
    marginTop: 8,
    color: "#6b7280",
    fontSize: 13,
  },
  closeButton: {
    marginTop: 8,
    backgroundColor: "#111827",
    borderRadius: 8,
    paddingVertical: 11,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
