import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#20295F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 50,
    marginHorizontal: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  welcome: {
    fontSize: 30,
    textShadowColor: '#20295F',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 12,
  },
});

export default styles;
