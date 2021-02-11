import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  question: {
    fontSize: 30,
  },
  result: {
    flex: 3,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 100,
  },
  imagePosition: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  resultText: {
    fontSize: 30,
    textShadowColor: '#20295F',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 10,
  },
});

export default styles;
