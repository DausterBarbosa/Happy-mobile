import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEDEE5',
  },

  image: {
    width: 376,
    height: 260,
    resizeMode: 'cover',
    marginRight: 10,
  },

  content: {
    padding: 20,
  },

  title: {
    color: '#4D6F80',
    fontWeight: 'bold',
    fontSize: 30,
  },

  about: {
    color: '#5C8599',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 20,
    lineHeight: 25,
  },

  orphanageLocation: {
    backgroundColor: '#E6F7FB',
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },

  map: {
    height: 196,
    width: '100%',
  },

  gmButton: {
    color: '#0089A5',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
  },

  instructions: {
    marginTop: 39,
  },

  instructionsTitle: {
    fontSize: 24,
    color: '#4D6F80',
    fontWeight: '700',
  },

  instructionsBoxes: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  box: {
    backgroundColor: '#E6F7FB',
    width: 159,
    height: 160,
    padding: 20,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#B3DAE2',
    borderWidth: 1,
  },

  boxText: {
    width: 125,
    fontSize: 15,
    fontWeight: '600',
    color: '#5C8599',
    lineHeight: 25,
    marginTop: 16,
  },

  openWeekend: {
    backgroundColor: '#EDFFF6',
  },
});

export default styles;
