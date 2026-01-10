import {StyleSheet, Platform} from 'react-native';

export const sidebarStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  sidebar: {
    position: 'absolute',
    right: 0,
    top: Platform.OS === 'ios' ? 120 : 90,
    bottom: 30,
    width: 200,
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsList: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
    paddingBottom: 20,
  },
  exportButton: {
    flex: 1,
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  importButton: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  exportText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
