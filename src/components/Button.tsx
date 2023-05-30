import React, {FC} from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export enum typeButton {
  normal,
  orange,
  result,
}

interface Props {
  text: string;
  type?: typeButton;
  onPress: () => void;
}

const Button: FC<Props> = ({text, onPress, type = typeButton.normal}) => {
  return (
    <TouchableOpacity
      disabled={Boolean(!text)}
      style={[
        styles.button,
        type === typeButton.result && styles.resultsButton,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          type === typeButton.orange && styles.orangeText,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '500',
    color: 'white',
  },
  orangeText: {
    color: 'orange',
  },
  resultsButton: {
    backgroundColor: 'orange',
  },
});

export default Button;
