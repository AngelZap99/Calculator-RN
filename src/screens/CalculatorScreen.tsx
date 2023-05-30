import React from 'react';
import {View, Text} from 'react-native';

import Button, {typeButton} from '../components/Button';
import Separator from '../components/Separator';

import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.pastResultText}>0</Text>
      <Text style={styles.resultText}>1,500</Text>

      <Separator />

      <View style={styles.buttonsRow}>
        <Button onPress={() => {}} text="AC" type={typeButton.orange} />
        <Button onPress={() => {}} text="<-" type={typeButton.orange} />
        <Button onPress={() => {}} text="%" type={typeButton.orange} />
        <Button onPress={() => {}} text="/" type={typeButton.orange} />
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => {}} text="7" />
        <Button onPress={() => {}} text="8" />
        <Button onPress={() => {}} text="9" />
        <Button onPress={() => {}} text="x" type={typeButton.orange} />
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => {}} text="4" />
        <Button onPress={() => {}} text="5" />
        <Button onPress={() => {}} text="6" />
        <Button onPress={() => {}} text="-" type={typeButton.orange} />
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => {}} text="1" />
        <Button onPress={() => {}} text="2" />
        <Button onPress={() => {}} text="3" />
        <Button onPress={() => {}} text="+" type={typeButton.orange} />
      </View>
      <View style={styles.buttonsRow}>
        <Button onPress={() => {}} text="" />
        <Button onPress={() => {}} text="0" />
        <Button onPress={() => {}} text="." />
        <Button onPress={() => {}} text="=" type={typeButton.result} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
