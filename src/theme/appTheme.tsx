import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  pastResultText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'right',
    opacity: 0.8,
  },
  resultText: {
    color: 'white',
    fontSize: 45,
    textAlign: 'right',
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
