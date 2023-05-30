import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import CalculatorScreen from './src/screens/CalculatorScreen';

import {styles} from './src/theme/appTheme';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;
