import React from 'react';
import {View} from 'react-native';

import Button, {typeButton} from '../components/Button';

import useCalculator from '../hooks/useCalculator';

import {styles} from '../theme/appTheme';
import Results from '../components/Results';

const CalculatorScreen = () => {
  const {
    pastResult,
    result,
    operator,
    handleGoBack,
    handleNumber,
    handleOperator,
    handleReset,
    handleResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Results result={result} pastResult={pastResult} operator={operator} />

      <View style={styles.buttonsRow}>
        {/* cleaning buttons */}
        <Button
          onPress={() => handleReset()}
          text="AC"
          type={typeButton.orange}
        />
        <Button
          onPress={() => handleGoBack()}
          text="<-"
          type={typeButton.orange}
        />
        {/* Operator Button */}
        <Button
          onPress={() => handleOperator('%')}
          text="%"
          type={typeButton.orange}
        />
        <Button
          onPress={() => handleOperator('/')}
          text="/"
          type={typeButton.orange}
        />
      </View>

      <View style={styles.buttonsRow}>
        {/* Numeric buttons */}
        <Button onPress={() => handleNumber('7')} text="7" />
        <Button onPress={() => handleNumber('8')} text="8" />
        <Button onPress={() => handleNumber('9')} text="9" />
        {/* Operator Button */}
        <Button
          onPress={() => handleOperator('x')}
          text="x"
          type={typeButton.orange}
        />
      </View>

      <View style={styles.buttonsRow}>
        {/* Numeric buttons */}
        <Button onPress={() => handleNumber('4')} text="4" />
        <Button onPress={() => handleNumber('5')} text="5" />
        <Button onPress={() => handleNumber('6')} text="6" />
        {/* Operator Button */}
        <Button
          onPress={() => handleOperator('-')}
          text="-"
          type={typeButton.orange}
        />
      </View>

      <View style={styles.buttonsRow}>
        {/* Numeric buttons */}
        <Button onPress={() => handleNumber('1')} text="1" />
        <Button onPress={() => handleNumber('2')} text="2" />
        <Button onPress={() => handleNumber('3')} text="3" />
        {/* Operator Button */}
        <Button
          onPress={() => handleOperator('+')}
          text="+"
          type={typeButton.orange}
        />
      </View>

      <View style={styles.buttonsRow}>
        {/* Empty button */}
        <Button onPress={() => {}} text="" />
        {/* Numeric buttons */}
        <Button onPress={() => handleNumber('0')} text="0" />
        <Button onPress={() => handleNumber('.')} text="." />
        {/* Result button */}
        <Button
          onPress={() => handleResult()}
          text="="
          type={typeButton.result}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
