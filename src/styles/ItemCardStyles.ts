import {StyleSheet} from 'react-native';

export const itemCardStyles = StyleSheet.create({
  itemCard: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemCardHidden: {
    opacity: 0.5,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemType: {
    fontSize: 18,
    marginRight: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  visibilityButton: {
    marginLeft: 'auto',
    padding: 2,
  },
  visibilityText: {
    fontSize: 16,
  },
  itemDetail: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 5,
  },
  editButton: {
    flex: 1,
    padding: 6,
    backgroundColor: '#3498db',
    borderRadius: 3,
    alignItems: 'center',
  },
  repositionButton: {
    flex: 1,
    padding: 6,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    alignItems: 'center',
  },
  deleteButton: {
    flex: 1,
    padding: 6,
    backgroundColor: '#e74c3c',
    borderRadius: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
});
