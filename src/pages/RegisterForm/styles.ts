import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEDEE5',
    padding: 20,
  },

  title: {
    color: '#5C8599',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },

  label: {
    color: '#8FA7B2',
    fontSize: 15,
    fontWeight: '600',
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  visitationContainer: {
    marginTop: 40,
  },

  button: {
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
