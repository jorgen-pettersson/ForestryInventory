import {StyleSheet, Platform} from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: '#2c3e50',
    padding: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  debugHeader: {
    backgroundColor: '#c0392b',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e74c3c',
    marginLeft: 10,
    marginRight: 5,
  },
  online: {
    backgroundColor: '#2ecc71',
  },
  gpsActive: {
    backgroundColor: '#3498db',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
  },
});
