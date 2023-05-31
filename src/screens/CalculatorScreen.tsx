import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Button, {typeButton} from '../components/Button';
import Separator from '../components/Separator';

import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const [pastResult, setPastResult] = useState('0');
  const [result, setResult] = useState('235234');
  const [operator, setOperator] = useState('');

  const handleReset = () => {
    if (result === '0') {
      setPastResult('0');
      setOperator('');
    } else {
      setResult('0');
    }
  };

  const handleOperator = (operation: string) => {
    if (result !== '0') {
      setPastResult(result);
      setResult('0');
      setOperator(operation);
    } else {
      setResult('-0');
    }
  };

  const handleGoBack = () => {
    setResult(result.slice(0, result.length - 1));
    if (result.length - 1 === 0) {
      setResult('0');
    } else if (result.length - 1 === 1 && result[0] === '-') {
      setResult('0');
    }
  };

  const handleNumber = (number: string) => {
    if (number === '.' && !result.includes('.')) {
      setResult(value => value + number);
    } else if (result === '0' || result === '-0') {
      result === '0' ? setResult(number) : setResult('-' + number);
    } else if (number !== '.') {
      setResult(value => value + number);
    }
  };

  const handleResult = () => {
    // setPastResult(result);
    switch (operator) {
      case '%': {
        setResult(String(Number(pastResult) % Number(result)));
        break;
      }
      case '/': {
        setResult(String(Number(pastResult) / Number(result)));
        break;
      }
      case 'x': {
        setResult(String(Number(pastResult) * Number(result)));
        break;
      }
      case '-': {
        setResult(String(Number(pastResult) - Number(result)));
        break;
      }
      case '+': {
        setResult(String(Number(pastResult) + Number(result)));
        break;
      }
      default:
        return;
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text
        style={styles.pastResultText}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {pastResult} {operator}
      </Text>
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      <Separator />

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
