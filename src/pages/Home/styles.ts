import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  calloutStyle: {
    height: 46,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  calloutText: {
    color: '#15C3D6',
    fontWeight: 'bold',
    fontSize: 15,
  },

  footer: {
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#8FA7B2',
    marginLeft: 20,
  },

  footerButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15C3D6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default styles;
