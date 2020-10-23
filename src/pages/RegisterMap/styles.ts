import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  map: {
    flex: 1,
  },

  button: {
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
