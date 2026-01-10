import {StyleSheet, Dimensions, Platform} from 'react-native';

const {height} = Dimensions.get('window');

export const toolPanelStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sideSheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 220,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  menuItems: {
    flex: 1,
    padding: 10,
  },
  toolButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 2,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
  activeButton: {
    backgroundColor: '#3498db',
  },
  buttonIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
  activeButtonText: {
    color: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: '#ecf0f1',
    marginVertical: 10,
  },
  menuToggle: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 120 : 90,
    left: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuToggleText: {
    fontSize: 22,
  },
});
