import {StyleSheet} from 'react-native';

export const mediaStyles = StyleSheet.create({
  // MediaPicker styles
  pickerContainer: {
    marginBottom: 15,
  },
  pickerButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  pickerButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  pickerButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },

  // MediaGallery styles
  galleryContainer: {
    marginTop: 8,
  },
  galleryScroll: {
    flexDirection: 'row',
  },
  galleryItem: {
    width: 70,
    height: 70,
    marginRight: 8,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
  videoIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  videoIcon: {
    color: 'white',
    fontSize: 24,
  },
  deleteButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(231, 76, 60, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },

  // MediaViewer styles
  viewerContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  viewerVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  viewerCloseButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewerCloseText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  // Inline media section in forms
  mediaSectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  mediaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  addMediaButton: {
    width: 70,
    height: 70,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#3498db',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  addMediaButtonText: {
    color: '#3498db',
    fontSize: 28,
    fontWeight: '300',
  },
  mediaCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
