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

  buttonFile: {
    backgroundColor: '#FFF',
    borderColor: '#15B6D6',
    borderWidth: 1,
    borderStyle: 'dotted',
    marginTop: 10,
    marginBottom: 0,
  },

  fileContainer: {
    marginTop: 20,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDFFF6',
    borderRadius: 20,
    padding: 5,
    borderColor: '#A1E9C5',
    borderWidth: 1,
    marginTop: 5,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  imageName: {
    color: '#37C77F',
    fontSize: 15,
    marginLeft: 10,
    flex: 1,
  },
});

export default styles;
